import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../models";
import {Comentario} from "../../../models/comentario.model";
import {AuthService, PostService} from "../../../services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;

  comentario: Comentario = new Comentario();

  subcomentario: Comentario = new Comentario();

  subcomentarioHabilitado: number;

  constructor(private postService: PostService, private route: ActivatedRoute, public authService: AuthService) {
  }

  ngOnInit(): void {
    if (this.post != null) {
      this.comentario.idPost = this.post.idPost;
      this.comentario.idUsuario = this.authService.obterUsuario().idUsuario;
    }
  }


  reagir(nome: string, idComentario: number, tipo: string) {
    let reacao = this.filtrarReacaoPorTipoENome(tipo, idComentario, nome);
    if (reacao != null) {
      let toggleMarcacao = !reacao.marcado;
      this.postService.reagir(reacao.idReacao, toggleMarcacao, this.post.idPost, idComentario, this.authService.obterUsuario().idUsuario)
        .subscribe(() => this.buscarReacoes(idComentario, tipo));
    }
  }

  private filtrarReacaoPorTipoENome(tipo: string, idComentario: number, nome: string) {
    let reacao;
    if (tipo === 'subcomentario')
      reacao = this.filtrarReacaoPorNomeSubcomentario(idComentario, nome);
    else if (tipo === 'comentario')
      reacao = this.filtrarReacaoPorNomeComentario(idComentario, nome);
    else if (tipo === 'post')
      reacao = this.filtrarReacaoPorNomePost(nome);
    return reacao;
  }

  comentar() {
    this.postService.comentar(this.comentario)
      .subscribe(() => this.atualizarComentarios());
  }

  private atualizarComentarios() {
    this.comentario = new Comentario();
    this.comentario.idPost = this.post.idPost;
    this.comentario.idUsuario = this.authService.obterUsuario().idUsuario;
    this.buscarComentarios();
  }

  subcomentar(idComentario: number) {
    this.subcomentario.idUsuario = this.authService.obterUsuario().idUsuario;
    this.subcomentario.idComentario = idComentario;

    this.postService.comentar(this.subcomentario)
      .subscribe(() => this.atualizarSubcomentarios(idComentario, this.authService.obterUsuario().idUsuario))
  }

  private atualizarSubcomentarios(idComentario: number, idUsuario: number) {
    this.postService.buscarSubcomentarios(this.subcomentario.idComentario, idUsuario)
      .subscribe(response => {
        let comentarioPai = this.post.comentarios.find(c => c.idComentario == idComentario);
        comentarioPai.subcomentarios = response;
      })
    this.subcomentario = new Comentario();
    this.subcomentarioHabilitado = null;
  }

  habilitarSubcomentario(idComentario: number) {
    if (this.subcomentario.descricao != null && this.subcomentario.descricao.length > 0) {
      if (confirm("Há um comentário em edição. Tem certeza de que deseja descartá-lo?")) {
        this.subcomentario = new Comentario();
        this.subcomentarioHabilitado = idComentario;
      }
    } else {
      this.subcomentarioHabilitado = idComentario;
    }
  }

  private filtrarReacaoPorNomeComentario(idComentario: number, nome: string) {
    for (let comentario of this.post.comentarios) {
      if (comentario.idComentario == idComentario) {
        for (let reacao of comentario.reacoes) {
          if (reacao.nome == nome)
            return reacao;
        }
      }
    }
    return null;
  }

  private filtrarReacaoPorNomePost(nome: string) {
    return this.post.reacoes.find(r => r.nome === nome);
  }

  private filtrarReacaoPorNomeSubcomentario(idComentario: number, nome: string) {
    for (let comentario of this.post.comentarios) {
      for (let subcomentario of comentario.subcomentarios) {
        if (subcomentario.idComentario == idComentario) {
          for (let reacao of subcomentario.reacoes) {
            if (reacao.nome == nome)
              return reacao;
          }
        }
      }
    }
    return null;
  }

  private buscarReacoes(idComentario: number, tipo: string) {
    this.postService.buscarReacoes(this.post.idPost, idComentario, this.authService.obterUsuario().idUsuario)
      .subscribe(response => {
        if (tipo === 'post')
          this.post.reacoes = response;
        else if (tipo === 'comentario')
          this.atualizarReacoesComentario(idComentario, response);
        else if (tipo === 'subcomentario')
          this.atualizarReacoesSubcomentario(idComentario, response);
      })
  }

  private atualizarReacoesComentario(idComentario: number, response) {
    let subcomentario = this.post.comentarios.find(c => c.idComentario === idComentario);
    if (subcomentario != null)
      subcomentario.reacoes = response;
  }

  private atualizarReacoesSubcomentario(idComentario: number, response) {
    for (let comentario of this.post.comentarios) {
      let subcomentario = comentario.subcomentarios.find(c => c.idComentario === idComentario);
      if (subcomentario != null)
        subcomentario.reacoes = response;
    }
  }

  private buscarComentarios() {
    this.postService.buscarComentarios(this.post.idPost, this.authService.obterUsuario().idUsuario, 100)
      .subscribe(response => this.post.comentarios = response);
  }
}

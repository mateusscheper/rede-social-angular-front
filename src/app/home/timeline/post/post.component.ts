import {Component, Input, OnInit} from '@angular/core';
import {Post, Reacao} from "../../../models";
import {Comentario} from "../../../models/comentario.model";
import {PostService} from "../../../services";

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post = new Post();

  comentario: Comentario = new Comentario();

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    if (this.post.idPost != null) {
      this.comentario.idPost = this.post.idPost;
      this.comentario.idUsuario = 1;
      this.buscarReacoes(null);
      this.buscarComentarios();
    }
  }

  reagir(nomeReacao: string, idComentario: number) {
    let reacao = this.filtrarReacaoPorNome(idComentario, nomeReacao);
    if (reacao != null) {
      let toggleMarcacao = !reacao.marcado;
      this.postService.reagir(reacao.idReacao, toggleMarcacao, this.post.idPost, idComentario, 1)
        .subscribe(() => this.buscarReacoes(idComentario));
    }
  }

  obterReacaoPost(nome: string): Reacao {
    return this.post.reacoes.find(r => r.nome == nome);
  }

  comentar() {
    this.postService.comentar(this.comentario)
      .subscribe(() => {
          this.comentario = new Comentario();
          this.comentario.idPost = this.post.idPost;
          this.comentario.idUsuario = 1;
          this.buscarComentarios();
        },
        error => console.log(error));
  }

  esconderMostrarPostCompleto(): boolean {
    if (this.post.comentarios == null)
      return true;

    for (let c of this.post.comentarios) {
      if (c.quantidadeComentariosPost > 3)
        return false;
    }
    return true;
  }

  linkPostCompleto(): string {
    return '#';
  }

  private filtrarReacaoPorNome(idComentario: number, nomeReacao: string) {
    if (idComentario != null)
      return this.obterReacaoComentario(nomeReacao, idComentario);
    else
      return this.obterReacaoPost(nomeReacao);
  }

  private buscarComentarios() {
    this.postService.buscarComentarios(this.post.idPost)
      .subscribe(response => {
        this.post.comentarios = response;
      }, error => console.log(error));
  }

  private buscarReacoes(idComentario: number) {
    this.postService.buscarReacoes(this.post.idPost, idComentario, 1)
      .subscribe(response => {
        if (idComentario != null) {
          for (let c of this.post.comentarios) {
            if (c.idComentario == idComentario)
              c.reacoes = response;
          }
        } else {
          this.post.reacoes = response;
        }
      })
  }

  private obterReacaoComentario(nomeReacao: string, idComentario: number): Reacao {
    for (let c of this.post.comentarios) {
      if (c.idComentario == idComentario) {
        for (let reacao of c.reacoes) {
          if (reacao.nome == nomeReacao)
            return reacao;
        }
      }
    }
    return null;
  }
}

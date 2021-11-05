import {Component, Input, OnInit} from '@angular/core';
import {Post, Reacao} from "../../../models";
import {Comentario} from "../../../models/comentario.model";
import {AuthService, PostService} from "../../../services";

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post = new Post();

  comentario: Comentario = new Comentario();

  constructor(private postService: PostService, public authService: AuthService) {
  }

  ngOnInit(): void {
    if (this.post.idPost != null) {
      this.comentario.idPost = this.post.idPost;
      this.comentario.idUsuario = this.authService.obterUsuario().idUsuario;
      this.buscarReacoes(null);
      this.buscarComentarios();
    }
  }

  public reagir(nomeReacao: string, idComentario: number) {
    let reacao = this.filtrarReacaoPorNome(idComentario, nomeReacao);
    if (reacao != null) {
      let toggleMarcacao = !reacao.marcado;
      this.postService.reagir(reacao.idReacao, toggleMarcacao, this.post.idPost, idComentario, this.authService.obterUsuario().idUsuario)
        .subscribe(() => this.buscarReacoes(idComentario));
    }
  }

  public comentar() {
    this.postService.comentar(this.comentario)
      .subscribe(() => {
          this.comentario = new Comentario();
          this.comentario.idPost = this.post.idPost;
          this.comentario.idUsuario = this.authService.obterUsuario().idUsuario;
          this.buscarComentarios();
        });
  }

  public esconderMostrarPostCompleto(): boolean {
    if (this.post.comentarios == null)
      return true;

    for (let c of this.post.comentarios) {
      if (c.quantidadeComentariosPost > 3)
        return false;
    }
    return true;
  }

  private filtrarReacaoPorNome(idComentario: number, nomeReacao: string) {
    if (idComentario != null)
      return this.obterReacaoComentario(nomeReacao, idComentario);
    else
      return this.obterReacaoPost(nomeReacao);
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

  private obterReacaoPost(nome: string): Reacao {
    return this.post.reacoes.find(r => r.nome == nome);
  }

  private buscarComentarios() {
    this.postService.buscarComentarios(this.post.idPost, this.authService.obterUsuario().idUsuario, 3)
      .subscribe(response => this.post.comentarios = response);
  }

  private buscarReacoes(idComentario: number) {
    this.postService.buscarReacoes(this.post.idPost, idComentario, this.authService.obterUsuario().idUsuario)
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
}

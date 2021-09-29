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
      this.buscarReacoes();
      this.buscarComentarios();
    }
  }

  private buscarComentarios() {
    this.postService.buscarComentarios(this.post.idPost)
      .subscribe(response => {
        this.post.comentarios = response;
      }, error => console.log(error));
  }

  reagir(nomeReacao: string) {
    let reacao = this.obterReacao(nomeReacao);
    if (reacao != null) {
      let toggleMarcacao = !reacao.marcado;
      this.postService.reagir(reacao.idReacao, toggleMarcacao, this.post.idPost, 1)
        .subscribe(() => this.buscarReacoes());
    }
  }

  private buscarReacoes() {
    this.postService.buscarReacoes(this.post.idPost, 1)
      .subscribe(response => {
        this.post.reacoes = response;
      })
  }

  obterReacao(nome: string): Reacao {
    return this.post.reacoes.find(r => r.nome == nome);
  }
}

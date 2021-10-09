import {Component, OnInit} from '@angular/core';
import {Post} from "../../models";
import {PostService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";
import {Comentario} from "../../models/comentario.model";

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {

  post: Post;

  comentario: Comentario = new Comentario();
  subcomentario: Comentario = new Comentario();
  subcomentarioHabilitado: number;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const idPost = +this.route.snapshot.params['idPost'];
    this.postService.buscarPorId(idPost, 1)
      .subscribe(response => {
          this.post = response;
        },
        error => console.log(error));
  }

  reagir(nome: string, idComentario: number) {

  }

  comentar() {

  }

  subcomentar(idComentario: number) {

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
}

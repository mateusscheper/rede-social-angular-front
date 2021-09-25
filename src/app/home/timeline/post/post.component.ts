import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../models";
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
      this.postService.buscarComentarios(this.post.idPost)
        .subscribe(response => {
          this.post.comentarios = response;
        }, error => console.log(error));
    }
  }
}

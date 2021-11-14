import {Component, OnInit} from '@angular/core';
import {Post} from "../../../models";
import {AuthService, PostService} from "../../../services";
import {ActivatedRoute} from "@angular/router";
import {Comentario} from "../../../models/comentario.model";

@Component({
  selector: 'app-full-post',
  host: {
    class: 'row'
  },
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {

  post: Post;

  constructor(private postService: PostService, private route: ActivatedRoute, public authService: AuthService) {
  }

  ngOnInit(): void {
    const idPost = +this.route.snapshot.params['idPost'];
    this.postService.buscarPorId(idPost, this.authService.obterUsuario().idUsuario)
      .subscribe(response => {
        this.post = response;
      });
  }
}

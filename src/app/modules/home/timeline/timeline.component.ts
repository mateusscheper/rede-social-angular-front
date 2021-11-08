import {Component, OnInit} from '@angular/core';
import {AuthService, PostService} from "../../../services";
import {Post} from "../../../models";

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  posts: Post[] = [];

  carregando: boolean = true;

  constructor(private postService: PostService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.carregarPosts();
  }

  carregarPosts() {
    this.postService.buscarPosts(this.authService.obterUsuario().idUsuario)
      .subscribe(response => {
          this.posts = response;
          this.carregando = false;
        });
  }
}

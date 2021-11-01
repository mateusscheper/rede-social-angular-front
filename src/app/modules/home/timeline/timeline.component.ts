import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../services";
import {Post} from "../../../models";
import {Router} from "@angular/router";

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  posts: Post[] = [];

  carregando: boolean = true;

  constructor(private postService: PostService, private router: Router) {
  }

  ngOnInit(): void {
    this.carregarPosts();
  }

  carregarPosts() {
    this.postService.buscarPosts(1)
      .subscribe(response => {
          this.posts = response;
          this.carregando = false;
        });
  }
}

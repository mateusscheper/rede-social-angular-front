import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services";
import {Post} from "../../models";

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  posts: Post[] = [];

  carregando: boolean = true;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.buscarPosts(1)
      .subscribe(response => {
        this.posts = response;
        this.carregando = false;
      },
        error => {console.log(error)});
  }
}

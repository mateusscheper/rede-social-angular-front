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

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.posts = this.postService.buscarPosts();
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../models";

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post = new Post();

  constructor() {
  }

  ngOnInit(): void {
  }
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {PostService} from "../../services";
import {Post} from "../../models";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'novopost',
  templateUrl: './novopost.component.html',
  styleUrls: ['./novopost.component.css']
})
export class NovopostComponent implements OnInit {

  esconderBotao: boolean = false;

  @ViewChild("postForm", {static: true}) postForm: NgForm;

  post: Post;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.post = new Post();
    this.post.descricao = "";
  }

  init(): void {
    this.post = new Post();
    this.post.descricao = "";
    this.esconderBotao = true;
  }

  postar() {
    this.postService.postar(this.post);
    this.esconderBotao = false;
  }
}

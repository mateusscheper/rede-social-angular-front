import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostService} from "../../../services";
import {Post} from "../../../models";
import {Router} from "@angular/router";

@Component({
  selector: 'novopost',
  templateUrl: './novopost.component.html',
  styleUrls: ['./novopost.component.css']
})
export class NovopostComponent implements OnInit {

  esconderBotao: boolean = false;

  @Input()
  posts: Post[];

  @Output() onPostSuccess: EventEmitter<any> = new EventEmitter<any>();

  post: Post;

  private imagem: any;

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
    this.postService.postar(this.post, this.imagem)
      .subscribe(() => {
        this.esconderBotao = false;
        this.onPostSuccess.emit();
      });
  }

  associarImagemAoPost(event) {
    const file = event.target.files[0];
    if (file)
      this.imagem = file;
  }
}

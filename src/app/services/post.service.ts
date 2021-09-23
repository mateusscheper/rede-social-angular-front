import {Injectable} from '@angular/core';
import {Post, Usuario} from "../models";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() {
  }

  buscarPosts(): Post[] {
    let posts: Post[] = [];
    let post = new Post(
      new Usuario("Mateus", "mateus_scheper@hotmail.com", "favicon.ico", new Date(), undefined, [], []),
      new Date(),
      undefined,
      [],
      [],
      [],
      "Descriçãooo"
    );

    posts.push(post);

    console.log(post.criador?.nome);

    return posts;
  }
}

import {Injectable} from '@angular/core';
import {Post} from "../models";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  buscarPosts(idUsuario: number): Observable<any> {
    return this.httpClient.get("http://localhost:8080/api/post/" + idUsuario);
  }

  postar(post: Post, imagem: any): Observable<any> {
    post.idUsuario = 1;
    const formData = new FormData();

    formData.append("imagem", imagem);
    formData.append("post", new Blob([JSON.stringify(post)]));

    return this.httpClient.post("http://localhost:8080/api/post", formData);
  }

  buscarComentarios(idPost: number): Observable<any> {
    return this.httpClient.get("http://localhost:8080/api/post/" + idPost + "/comentario");
  }
}

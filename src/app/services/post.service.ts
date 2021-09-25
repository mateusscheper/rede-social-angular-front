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

  postar(post: Post) {
    console.log(post);
  }

  buscarComentarios(idPost: number): Observable<any> {
    return this.httpClient.get("http://localhost:8080/api/post/" + idPost + "/comentario");
  }
}

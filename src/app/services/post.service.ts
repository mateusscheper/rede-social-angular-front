import {Injectable} from '@angular/core';
import {Post} from "../models";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Reagir} from "../models/reagir.model";
import {Comentario} from "../models/comentario.model";

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
    return this.httpClient.get("http://localhost:8080/api/comentario?idPost=" + idPost + "&idUsuario=" + "1" + "&limit=" + 3);
  }

  reagir(idReacao: number, marcado: boolean, idPost: number, idComentario: number, idUsuario: number): Observable<any> {
    let reagir = new Reagir(idReacao, marcado, idPost, idComentario, idUsuario);
    return this.httpClient.post("http://localhost:8080/api/reacao", reagir);
  }

  buscarReacoes(idPost: number, idComentario: number, idUsuario: number): Observable<any> {
    let url = this.montarUrlBuscarReacoes(idComentario, idPost, idUsuario);

    return this.httpClient.get(url);
  }

  private montarUrlBuscarReacoes(idComentario: number, idPost: number, idUsuario: number): string {
    let url = "http://localhost:8080/api/reacao?";
    if (idComentario != null)
      url += "idComentario=" + idComentario;
    else
      url += "idPost=" + idPost;
    url += "&idUsuario=" + idUsuario;
    return url;
  }

  comentar(comentario: Comentario): Observable<any> {
    return this.httpClient.post("http://localhost:8080/api/comentario", comentario);
  }
}

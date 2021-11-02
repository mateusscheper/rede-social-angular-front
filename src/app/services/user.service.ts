import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL_API_USUARIO = "http://localhost:8080/api/usuario";

  constructor(private httpClient: HttpClient) {
  }

  obterUsuario(idUsuario: string): Observable<any> {
    let url = this.URL_API_USUARIO;
    if (idUsuario)
      url += "/" + idUsuario;

    return this.httpClient.get(url);
  }

  adicionar(idUsuario: number): Observable<any> {
    return this.httpClient.post(this.URL_API_USUARIO + "/" + idUsuario + "/adicionar", {});
  }

  desfazerAmizade(idUsuario: number): Observable<any> {
    return this.httpClient.post(this.URL_API_USUARIO + "/" + idUsuario + "/desfazer", {});
  }

  aceitarAmizade(idUsuario: number): Observable<any> {
    return this.httpClient.post(this.URL_API_USUARIO + "/" + idUsuario + "/aceitar", {});
  }

  cancelarAdicionar(idUsuario: number): Observable<any> {
    return this.httpClient.post(this.URL_API_USUARIO + "/" + idUsuario + "/cancelar", {});
  }
}

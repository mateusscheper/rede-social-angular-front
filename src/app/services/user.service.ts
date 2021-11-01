import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  obterUsuario(id: string): Observable<any> {
    let url = "http://localhost:8080/api/usuario";
    if (id)
      url += "?idUsuario=" + id;

    return this.httpClient.get(url);
  }
}

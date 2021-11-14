import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  private URL_API_NOTIFICACAO = "http://localhost:8080/api/notificacao";

  constructor(private httpClient: HttpClient) {
  }

  consultarNotificacoes(): Observable<any> {
    return this.httpClient.get(this.URL_API_NOTIFICACAO + "/recente");
  }
}

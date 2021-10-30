import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenDTO} from "../models/tokenDTO.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private AUTH_API = "http://localhost:8080/api/auth/";
  private TOKEN_KEY = 'auth-token';
  private USER_KEY = 'auth-user';

  constructor(private http: HttpClient) {
  }

  logar(email: string, senha: string): Observable<any> {
    return this.http.post(this.AUTH_API + 'login', {
      email,
      senha
    });
  }

  registrar(email: string, senha: string): Observable<any> {
    return this.http.post(this.AUTH_API + 'registro', {
      email,
      senha
    });
  }

  deslogar(): void {
    window.sessionStorage.clear();
  }

  public salvarToken(token: TokenDTO): void {
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.setItem(this.TOKEN_KEY, token.token);
  }

  public obterToken(): string | null {
    return window.sessionStorage.getItem(this.TOKEN_KEY);
  }

  async validarToken(token: string) {
    return this.http.post(this.AUTH_API + 'valido', token).toPromise();
  }

  public salvarUsuarioEmSessao(token: TokenDTO): void {
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(token));
  }

  public obterUsuario(): any {
    const user = window.sessionStorage.getItem(this.USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
}

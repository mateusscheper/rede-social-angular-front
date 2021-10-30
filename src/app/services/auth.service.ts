import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginDTO} from "../models/loginDTO.model";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private AUTH_API = "http://localhost:8080/api/auth/";
  private TOKEN_KEY = 'auth-token';
  private USER_KEY = 'auth-user';

  constructor(private http: HttpClient, private cookieService: CookieService) {
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
    this.cookieService.deleteAll();
  }

  public salvarToken(loginDTO: LoginDTO): void {
    this.cookieService.set(this.TOKEN_KEY, loginDTO.token)
  }

  public obterToken(): string | null {
    return this.cookieService.get(this.TOKEN_KEY);
  }

  async validarToken(token: string) {
    return this.http.post(this.AUTH_API + 'valido', token).toPromise();
  }

  public salvarUsuarioEmSessao(loginDTO: LoginDTO): void {
    this.cookieService.set(this.USER_KEY, JSON.stringify(loginDTO.usuario))
  }

  public obterUsuario(): any {
    const usuario = this.cookieService.get(this.USER_KEY);
    if (usuario)
      return JSON.parse(usuario);
    return null;
  }
}

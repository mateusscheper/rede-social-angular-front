import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginDTO} from "../models/login-dto.model";
import {CookieService} from "ngx-cookie-service";
import {UsuarioSimplesDTO} from "../models/usuario-simples.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private AUTH_API = "http://localhost:8080/api/auth/";
  private TOKEN_KEY = 'auth-token';

  private usuario = new UsuarioSimplesDTO();

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  logar(email: string, senha: string): Observable<any> {
    return this.http.post(this.AUTH_API + 'login', {
      email,
      senha
    });
  }

  registrar(nome: string, email: string, senha: string): Observable<any> {
    return this.http.post(this.AUTH_API + 'registro', {
      nome,
      email,
      senha
    });
  }

  deslogar(): void {
    this.cookieService.deleteAll();
    this.usuario = null;
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
    this.usuario = loginDTO.usuario;
  }

  public obterUsuario(): any {
    if (this.usuario)
      return this.usuario;
    return null;
  }

  public atualizarFotoUsuario(foto: string) {
    if (this.usuario)
      this.usuario.foto = foto;
  }
}

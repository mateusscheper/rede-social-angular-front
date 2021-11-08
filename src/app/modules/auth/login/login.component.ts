import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  host: {
    class: 'container-fluid'
  },
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: any = {
    email: null,
    senha: null
  };

  isLogado = false;

  loginFalhou = false;

  mensagemErro = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    const token = this.authService.obterToken();
    if (token) {
      this.authService.validarToken(token)
        .then(() => this.router.navigate(['/home']))
        .catch()
    }
  }

  onSubmit(): void {
    this.authService.logar(this.formulario.email, this.formulario.senha)
      .subscribe(data => {
          this.authService.salvarToken(data);
          this.authService.salvarUsuarioEmSessao(data);

          this.loginFalhou = false;
          this.isLogado = true;

          this.router.navigate(['/home'])
        },
        () => {
          this.mensagemErro = "Ocorreu um erro ao acessar o sistema. Por favor, tente novamente em alguns instantes.";
          this.loginFalhou = true;
        }
      );
  }
}

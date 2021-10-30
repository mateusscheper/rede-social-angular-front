import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
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
        let token = this.authService.obterToken();
        if (token != null) {
            this.authService.validarToken(token)
                .then(() => this.router.navigate(['/home']), err => {
                  console.log(err)})
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
                err => {
                    console.log(err)
                    this.mensagemErro = err.error.message;
                    this.loginFalhou = true;
                }
            );
    }
}

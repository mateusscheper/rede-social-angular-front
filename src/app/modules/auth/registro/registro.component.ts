import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registro',
  host: {
    class: 'row'
  },
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: any = {
    nome: null,
    email: null,
    senha: null
  };

  sucesso = false;

  falhou = false;

  erros: string[];

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    const token = this.authService.obterToken();
    if (token) {
      this.authService.validarToken(token)
        .then(() => this.router.navigate(['/home']),
          () => this.router.navigate(['/login']))
        .catch()
    }
  }

  onSubmit(): void {
    const {nome, email, senha} = this.form;

    this.authService.registrar(nome, email, senha)
      .subscribe(() => {
          this.sucesso = true;
          this.falhou = false;
        },
        error => {
          this.erros = error.error.errors
          this.falhou = true
        });
  }
}

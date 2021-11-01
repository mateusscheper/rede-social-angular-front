import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: any = {
    email: null,
    senha: null
  };

  sucesso = false;

  falhou = false;

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
    const {email, senha} = this.form;

    this.authService.registrar(email, senha)
      .subscribe(() => {
          this.sucesso = true;
          this.falhou = false;
        },
        () => this.falhou = true);
  }
}

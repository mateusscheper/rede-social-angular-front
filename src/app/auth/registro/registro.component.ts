import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services";

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

  mensagemErro = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {email, senha} = this.form;

    this.authService.registrar(email, senha)
      .subscribe(() => {
          this.sucesso = true;
          this.falhou = false;
        },
        err => {
          this.mensagemErro = err.error.message;
          this.falhou = true;
        }
      );
  }
}

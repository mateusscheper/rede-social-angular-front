import {Component, OnInit} from '@angular/core';
import {UsuarioSimplesDTO} from "../../../models/usuario-simples.model";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.css']
})
export class LeftpanelComponent implements OnInit {

  query: any;

  resultado: UsuarioSimplesDTO[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  buscarPessoas() {
    if (this.query.length > 1) {
      this.userService.buscarUsuarioPorNomeOuEmail(this.query)
        .subscribe(response => {
          console.log(response)
          this.resultado = response
        })
    }
  }
}

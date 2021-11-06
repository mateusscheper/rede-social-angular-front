import {Component, OnInit} from '@angular/core';
import {UsuarioCompletoDTO} from "../../../models/usuario-completo-dto.model";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../services";

@Component({
  selector: 'app-fotos',
  host: {
    class: 'row'
  },
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  private id: number;

  usuario: UsuarioCompletoDTO;

  constructor(private route: ActivatedRoute, private userService: UserService, private authService: AuthService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.id = +id;

    this.userService.obterUsuarioComFotos(this.obterIdUsuario())
      .subscribe(response => this.usuario = response);
  }

  private obterIdUsuario() {
    return this.id ? this.id : this.authService.obterUsuario().idUsuario;
  }
}

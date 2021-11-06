import { Component, OnInit } from '@angular/core';
import {UsuarioCompletoDTO} from "../../../models/usuario-completo-dto.model";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {AuthService} from "../../../services";

@Component({
  selector: 'app-amigos',
  host: {
    class: 'row'
  },
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.css']
})
export class AmigosComponent implements OnInit {

  private id: number;

  usuario: UsuarioCompletoDTO;

  constructor(private route: ActivatedRoute, private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.id = +id;

    this.userService.obterUsuarioComAmigos(this.obterIdUsuario())
      .subscribe(response => this.usuario = response);
  }

  private obterIdUsuario() {
    return this.id ? this.id : this.authService.obterUsuario().idUsuario;
  }
}

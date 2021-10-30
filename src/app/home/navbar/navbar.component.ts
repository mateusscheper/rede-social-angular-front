import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../services";
import {Router} from "@angular/router";
import {UsuarioSimplesDTO} from "../../models/usuario-simples.model";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  title: string = "";
  usuario: UsuarioSimplesDTO;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.usuario = this.authService.obterUsuario();
  }

  deslogar() {
    this.authService.deslogar()
    this.router.navigate(['/login'])
  }
}

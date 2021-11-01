import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {UsuarioCompletoDTO} from "../../../models/usuario-completo-dto.model";

@Component({
  selector: 'app-perfil',
  host: {
    class: 'row'
  },
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  private id: number;

  public usuario: UsuarioCompletoDTO;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.id = +id;

    this.userService.obterUsuario(id)
      .subscribe(response => this.usuario = response,
        () => this.router.navigate(['/perfil']));
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {UsuarioCompletoDTO} from "../../../models/usuario-completo-dto.model";
import {AuthService} from "../../../services";

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

  exibirBotaoAdicionar = false;

  exibirBotaoDesfazerAmizade = false;

  exibirBotaoAceitar = false;

  exibirBotaoCancelarAdicionar = false;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.id = +id;

    this.userService.obterUsuario(id)
      .subscribe(response => {
          this.usuario = response;
          this.verificarIsUsuarioAmigo();
        });
  }

  private verificarIsUsuarioAmigo() {
    if (this.usuario?.statusAmizade) {
      if (this.usuario?.statusAmizade == 'Amigos')
        this.exibirBotaoDesfazerAmizade = true;
      else if (this.usuario?.statusAmizade == 'Pendente de aceite')
        this.exibirBotaoAceitar = true;
      else if (this.usuario?.statusAmizade == 'Pendente de resposta')
        this.exibirBotaoCancelarAdicionar = true;
    } else {
      this.exibirBotaoAdicionar = true;
    }
  }

  naoPossuiPosts(): boolean {
    return !this.usuario?.posts || this.usuario?.posts?.length < 1;
  }

  isMesmoUsuario(): boolean {
    const usuario = this.authService.obterUsuario();
    return this.usuario?.idUsuario == usuario.idUsuario;
  }

  adicionar() {
    this.userService.adicionar(this.usuario.idUsuario)
      .subscribe(() => {
        this.exibirBotaoAdicionar = false;
        this.exibirBotaoCancelarAdicionar = true;
      })
  }

  desfazerAmizade() {
    this.userService.desfazerAmizade(this.usuario.idUsuario)
      .subscribe(() => {
        this.exibirBotaoDesfazerAmizade = false;
        this.exibirBotaoAdicionar = true;
      })
  }

  aceitarAmizade() {
    this.userService.aceitarAmizade(this.usuario.idUsuario)
      .subscribe(() => {
        this.exibirBotaoAceitar = false;
        this.exibirBotaoDesfazerAmizade = true;
      })
  }

  cancelarAdicionar() {
    this.userService.cancelarAdicionar(this.usuario.idUsuario)
      .subscribe(() => {
        this.exibirBotaoCancelarAdicionar = false;
        this.exibirBotaoAdicionar = true;
      })
  }
}

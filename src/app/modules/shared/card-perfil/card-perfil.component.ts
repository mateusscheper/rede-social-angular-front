import {Component, Input, OnInit} from '@angular/core';
import {UsuarioCompletoDTO} from "../../../models/usuario-completo-dto.model";
import {Router} from "@angular/router";
import {AuthService, UserService} from "../../../services";

@Component({
  selector: 'card-perfil',
  templateUrl: './card-perfil.component.html',
  styleUrls: ['./card-perfil.component.css']
})
export class CardPerfilComponent implements OnInit {

  @Input()
  usuario: UsuarioCompletoDTO;

  exibirBotaoAdicionar = false;

  exibirBotaoDesfazerAmizade = false;

  exibirBotaoAceitar = false;

  exibirBotaoCancelarAdicionar = false;

  constructor(private userService: UserService, private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    if (this.usuario)
      this.verificarIsUsuarioAmigo()
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

  obterRotaAmigos() {
    if (this.usuario)
      return '/perfil/' + this.usuario.idUsuario + '/amigos';
    else
      return '/amigos';
  }

  obterRotaFotos() {
    if (this.usuario)
      return '/perfil/' + this.usuario.idUsuario + '/fotos';
    else
      return '/fotos';
  }

  mostrarBotaoTrocarFoto(): boolean {
    if (this.usuario)
      return this.usuario.idUsuario == this.authService.obterUsuario()?.idUsuario;
    return false;
  }

  manterOpacidade(): string {
    if (!this.mostrarBotaoTrocarFoto())
      return "opacity: 1 !important"
    return "";
  }
}

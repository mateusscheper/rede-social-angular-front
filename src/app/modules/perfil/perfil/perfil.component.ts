import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthService, UserService} from "../../../services";
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

  @ViewChild('inputFoto')
  inputFoto: ElementRef;

  @ViewChild('fecharModal')
  fecharModal: ElementRef;

  constructor(private userService: UserService, private route: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.id = +id;

    this.userService.obterUsuario(id)
      .subscribe(response => this.usuario = response);
  }

  naoPossuiPosts(): boolean {
    return !this.usuario?.posts || this.usuario?.posts?.length < 1;
  }

  trocarFotoPerfil(event) {
    const file = event.target.files[0];
    if (file)
      this.userService.trocarFotoPerfil(file, this.usuario.idUsuario)
        .subscribe(response => {
          let dadosRetorno = JSON.parse(response);
          this.usuario.foto = dadosRetorno.foto;

          for (let post of this.usuario.posts)
            post.criador.foto = dadosRetorno.fotoCrop;

          this.authService.atualizarFotoUsuario(dadosRetorno.fotoCrop);

          this.inputFoto.nativeElement.value = "";
          this.fecharModal.nativeElement.click();
        });
  }
}

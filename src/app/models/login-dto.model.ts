import {UsuarioSimplesDTO} from "./usuario-simples.model";

export class LoginDTO {

  constructor(
    private _usuario: UsuarioSimplesDTO,
    private _token: string) {
  }

  get usuario(): UsuarioSimplesDTO {
    return this._usuario;
  }

  get token(): string {
    return this._token;
  }
}

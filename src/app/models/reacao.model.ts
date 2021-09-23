import {Usuario} from "./usuario.model";
import {Post} from "./post.model";
import {TipoReacao} from "./tipo-reacao.model";

export class Reacao {

  constructor(
    private _post: Post,
    private _tipo: TipoReacao,
    private _usuario: Usuario,
    private _dataHora: Date) {
  }

  get post(): Post {
    return this._post;
  }

  set post(value: Post) {
    this._post = value;
  }

  get tipo(): TipoReacao {
    return this._tipo;
  }

  set tipo(value: TipoReacao) {
    this._tipo = value;
  }

  get usuario(): Usuario {
    return this._usuario;
  }

  set usuario(value: Usuario) {
    this._usuario = value;
  }

  get dataHora(): Date {
    return this._dataHora;
  }

  set dataHora(value: Date) {
    this._dataHora = value;
  }
}

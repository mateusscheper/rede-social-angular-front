import {Post} from "./post.model";

export class UsuarioCompletoDTO {

  constructor(
    public _idUsuario?: number,
    public _nome?: string,
    public _email?: string,
    public _dataNascimento?: Date,
    public _quantidadeAmigos?: number,
    public _foto?: string,
    public _statusAmizade?: string,
    public _posts?: Post[]) {
  }

  get idUsuario(): number {
    return this._idUsuario;
  }

  get nome(): string {
    return this._nome;
  }

  get email(): string {
    return this._email;
  }

  get dataNascimento(): Date {
    return this._dataNascimento;
  }

  get quantidadeAmigos(): number {
    return this._quantidadeAmigos;
  }

  get foto(): string {
    return this._foto;
  }

  get statusAmizade(): string {
    return this._statusAmizade;
  }

  get posts(): Post[] {
    return this._posts;
  }
}

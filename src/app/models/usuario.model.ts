import {Post} from "./post.model";

export class Usuario {

  constructor(
    public idUsuario?: number,
    public nome?: string,
    public email?: string,
    public foto?: string,
    public dataNascimento?: Date,
    public bloqueio?: Date,
    public amigos?: Usuario[],
    public postagens?: Post[]) {
  }
}

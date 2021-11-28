export class UsuarioSimplesDTO {

  constructor(
    public _idUsuario?: number,
    public _nome?: string,
    public _email?: string,
    public _foto?: string,
    public _amigos?: UsuarioSimplesDTO[]) {
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

  get foto(): string {
    return this._foto;
  }

  set foto(value: string) {
    this._foto = value;
  }

  get amigos(): UsuarioSimplesDTO[] {
    return this._amigos;
  }
}

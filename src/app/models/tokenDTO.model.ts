export class TokenDTO {

  constructor(
    private _idUsuario: number,
    private _token: string) {
  }

  get idUsuario(): number {
    return this._idUsuario;
  }

  get token(): string {
    return this._token;
  }
}

export class Reacao {

  constructor(
    private _idReacao?: number,
    private _nome?: string,
    private _icone?: string,
    private _quantidade?: number,
    private _marcado?: boolean) {
  }

  get idReacao(): number {
    return this._idReacao;
  }

  set idReacao(value: number) {
    this._idReacao = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get icone(): string {
    return this._icone;
  }

  set icone(value: string) {
    this._icone = value;
  }

  get quantidade(): number {
    return this._quantidade;
  }

  set quantidade(value: number) {
    this._quantidade = value;
  }

  get marcado(): boolean {
    return this._marcado;
  }

  set marcado(value: boolean) {
    this._marcado = value;
  }
}

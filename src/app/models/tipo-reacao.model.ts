export class TipoReacao {

  constructor(
    private _nome: string,
    private _icone: string,
    private _desativacao: Date) {
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

  get desativacao(): Date {
    return this._desativacao;
  }

  set desativacao(value: Date) {
    this._desativacao = value;
  }
}

export class NotificacaoDTO {

  constructor(
    public _idNotificacao?: number,
    public _conteudo?: string,
    public _url?: string,
    public _horario?: Date) {
  }

  get idNotificacao(): number {
    return this._idNotificacao;
  }

  get conteudo(): string {
    return this._conteudo;
  }

  get url(): string {
    return this._url;
  }

  get horario(): Date {
    return this._horario;
  }
}

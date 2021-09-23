import {Usuario} from "./usuario.model";

export class Arquivo {

  constructor(
    private _dono: Usuario,
    private _nome: string,
    private _caminho: string,
    private _tipo: string,
    private _tamanho: number) {
  }


  get dono(): Usuario {
    return this._dono;
  }

  set dono(value: Usuario) {
    this._dono = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get caminho(): string {
    return this._caminho;
  }

  set caminho(value: string) {
    this._caminho = value;
  }

  get tipo(): string {
    return this._tipo;
  }

  set tipo(value: string) {
    this._tipo = value;
  }

  get tamanho(): number {
    return this._tamanho;
  }

  set tamanho(value: number) {
    this._tamanho = value;
  }
}

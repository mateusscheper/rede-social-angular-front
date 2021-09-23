import {Usuario} from "./usuario.model";
import {Reacao} from "./reacao.model";
import {Arquivo} from "./arquivo.model";

export class Post {

  constructor(
    public criador?: Usuario,
    public criacao?: Date,
    public exclusao?: Date,
    public visualizadores?: Usuario[],
    public reacoes?: Reacao[],
    public arquivos?: Arquivo[],
    public descricao?: string) {
  }

}

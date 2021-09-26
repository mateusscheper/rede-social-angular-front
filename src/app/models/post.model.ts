import {Usuario} from "./usuario.model";
import {Reacao} from "./reacao.model";
import {Arquivo} from "./arquivo.model";
import {Comentario} from "./comentario.model";

export class Post {

  constructor(
    public idPost?: number,
    public idUsuario?: number,
    public criador?: Usuario,
    public criacao?: Date,
    public exclusao?: Date,
    public visualizadores?: Usuario[],
    public reacoes?: Reacao[],
    public arquivos?: Arquivo[],
    public comentarios?: Comentario[],
    public descricao?: string,
    public imagem?: File) {
  }
}

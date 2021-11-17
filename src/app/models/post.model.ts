import {Usuario} from "./usuario.model";
import {Reacao} from "./reacao.model";
import {Comentario} from "./comentario.model";

export class Post {

  constructor(
    public idPost?: number,
    public idUsuario?: number,
    public criador?: Usuario,
    public criacao?: Date,
    public visualizadores?: Usuario[],
    public reacoes?: Reacao[],
    public arquivo?: string,
    public comentarios?: Comentario[],
    public descricao?: string,
    public possuiReport?: boolean,
    public imagem?: File) {
  }
}

import {Reacao} from "./reacao.model";

export class Comentario {

  constructor(
    public idComentario?: number,
    public idPost?: number,
    public idUsuario?: number,
    public nomeUsuario?: string,
    public fotoUsuario?: string,
    public descricao?: string,
    public reacoes?: Reacao[],
    public quantidadeComentariosPost?: number) {
  }
}

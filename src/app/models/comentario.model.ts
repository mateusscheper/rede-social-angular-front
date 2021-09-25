export class Comentario {

  constructor(
    public idComentario?: number,
    public idUsuario?: number,
    public nomeUsuario?: string,
    public fotoUsuario?: string,
    public descricao?: string) {
  }
}

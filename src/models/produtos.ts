class Produto {
  id: number
  nome: string
  codigo: number
  descricao: string
  preco: number

  constructor(
    id: number,
    nome: string,
    codigo: number,
    descricao: string,
    preco: number
  ) {
    this.id = id
    this.nome = nome
    this.codigo = codigo
    this.descricao = descricao
    this.preco = preco
  }
}

export default Produto

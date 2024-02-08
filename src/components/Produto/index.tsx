import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import pencil from '../../assets/pencil.png'
import trash from '../../assets/trash.png'

import ProdutoModel from '../../models/produtos'
import { remover, editar } from '../../store/reducers/produtos'

type Props = ProdutoModel

const Produto = ({
  id,
  nome: nomeOriginal,
  descricao: descricaoOriginal,
  codigo,
  preco: precoOriginal
}: Props) => {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [preco, setPreco] = useState('') // Alterado para string

  const [estaEditando, setEstaeditando] = useState(false)
  const [corCard, setCorCard] = useState('transparent')

  const dispatch = useDispatch()

  useEffect(() => {
    if (
      nomeOriginal.length > 0 &&
      descricaoOriginal.length > 0 &&
      precoOriginal > 0
    ) {
      setNome(nomeOriginal)
      setDescricao(descricaoOriginal)
      setPreco(precoOriginal.toString()) // Convertido para string para manter a precisão dos decimais
    }
  }, [nomeOriginal, descricaoOriginal, precoOriginal])

  function trocaCor() {
    corCard === 'transparent' ? setCorCard('#000') : setCorCard('transparent')
  }

  const editando = () => {
    trocaCor()
    setEstaeditando(true)
  }

  const cancelaEdicao = () => {
    trocaCor()
    setEstaeditando(false)

    setNome(nomeOriginal)
    setDescricao(descricaoOriginal)
    setPreco(precoOriginal.toString()) // Convertido para string
  }

  const salvaEdicao = () => {
    trocaCor()
    dispatch(
      editar({
        id,
        nome,
        codigo,
        descricao,
        preco: parseFloat(preco) // Convertido para float antes de enviar para o redux
      })
    )
    setEstaeditando(false)
  }

  return (
    <S.Card>
      <div>
        <div>
          <S.CampoInput disabled={!estaEditando} value={nome} cor={corCard} />
          <p>
            Código do produto: <strong>{codigo}</strong>
          </p>
        </div>
        <S.Campo
          value={descricao}
          disabled={!estaEditando}
          onChange={({ target }) => setDescricao(target.value)}
        />
        <S.CampoInput
          value={preco}
          disabled={!estaEditando}
          onChange={({ target }) => setPreco(target.value)} // Mantém o valor como string para permitir decimais
          cor={corCard}
        />
        {estaEditando && (
          <div>
            <S.BotaoEDicao onClick={cancelaEdicao}>Cancelar</S.BotaoEDicao>
            <S.BotaoEDicao onClick={salvaEdicao}>Salvar</S.BotaoEDicao>
          </div>
        )}
      </div>
      <S.Imagem title="editar" onClick={editando} disabled={estaEditando}>
        <img src={pencil} />
      </S.Imagem>
      <S.Imagem title="excluir" onClick={() => dispatch(remover(id))}>
        <img src={trash} />
      </S.Imagem>
    </S.Card>
  )
}

export default Produto

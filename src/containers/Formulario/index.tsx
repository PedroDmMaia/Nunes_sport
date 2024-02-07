import { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { Titulo } from '../../styles'
import { adicionar } from '../../store/reducers/produtos'

const Formulario = () => {
  const [nome, setNome] = useState('')
  const [codigo, setCodigo] = useState(0)
  const [descricao, setDescricao] = useState('')
  const [preco, setPreco] = useState(0)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cadastra = (e: FormEvent) => {
    e.preventDefault()

    if (nome.length > 0 && codigo > 0 && descricao.length > 0 && preco > 0) {
      dispatch(
        adicionar({
          nome,
          codigo,
          descricao,
          preco
        })
      )
      alert('produto adicionado com sucesso')
      navigate('/')
    } else {
      alert('dados inválidos')
    }
  }
  return (
    <S.Container>
      <Titulo>CADASTRO DE PRODUTO</Titulo>
      <S.Formulario onSubmit={cadastra}>
        <S.Campo>
          <label htmlFor="nome">Nome do produto</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={({ target }) => setNome(target.value)}
          />
        </S.Campo>
        <S.Campo>
          <label htmlFor="codigo">Código do produto</label>
          <input
            type="text"
            id="codigo"
            value={isNaN(codigo) || codigo === 0 ? '' : codigo}
            onChange={({ target }) => setCodigo(Number(target.value))}
          />
        </S.Campo>
        <S.Campo>
          <S.Descricao
            placeholder="digite a descrição do produto"
            value={descricao}
            onChange={({ target }) => setDescricao(target.value)}
          />
        </S.Campo>
        <S.Campo>
          <label htmlFor="preco">Preço do produto</label>
          <input
            placeholder="ex: 149.9"
            type="text"
            id="preco"
            value={isNaN(preco) || preco === 0 ? '' : preco}
            onChange={({ target }) => setPreco(Number(target.value))}
          />
        </S.Campo>
        <S.BotaoEnviar type="submit">Cadastrar</S.BotaoEnviar>
      </S.Formulario>
    </S.Container>
  )
}

export default Formulario

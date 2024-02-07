import * as S from './styles'
import { Titulo } from '../../styles'

const Formulario = () => {
  return (
    <S.Container>
      <Titulo>CADASTRO DE PRODUTO</Titulo>
      <S.Formulario>
        <S.Campo>
          <label htmlFor="nome">Nome do produto</label>
          <input type="text" id="nome" />
        </S.Campo>
        <S.Campo>
          <label htmlFor="codigo">Código do produto</label>
          <input type="text" id="codigo" />
        </S.Campo>
        <textarea placeholder="digite a descrição do produto" />
        <S.Campo>
          <label htmlFor="preco">Preço do produto</label>
          <input type="text" id="preco" />
        </S.Campo>
      </S.Formulario>
    </S.Container>
  )
}

export default Formulario

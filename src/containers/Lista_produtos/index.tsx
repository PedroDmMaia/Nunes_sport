import * as S from './styles'

import Produto from '../../components/Produto'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaProdutos = () => {
  const { itens } = useSelector((state: RootReducer) => state.produto)

  return (
    <S.Container>
      <ul>
        {itens.map((item) => (
          <li key={item.id}>
            <Produto
              id={item.id}
              nome={item.nome}
              descricao={item.descricao}
              codigo={item.codigo}
              preco={item.preco}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}

export default ListaProdutos

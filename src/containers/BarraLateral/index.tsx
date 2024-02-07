import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import { Botao } from '../../styles'

type Props = {
  mostraBarra: boolean
}

const BarraLateral = ({ mostraBarra }: Props) => {
  const navigate = useNavigate()

  return (
    <S.Aside>
      <S.TituloPrincipal>
        {' '}
        <i>Nunes Sport</i>
      </S.TituloPrincipal>
      {mostraBarra ? (
        <>
          <S.Campo placeholder="digite o nome do produto" />
          <Botao onClick={() => navigate('/cadastro')} type="button">
            Adicionar
          </Botao>
        </>
      ) : (
        <S.BotaoVoltar onClick={() => navigate('/')}>
          Retornar a pagina home
        </S.BotaoVoltar>
      )}
    </S.Aside>
  )
}

export default BarraLateral

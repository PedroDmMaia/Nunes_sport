import styled from 'styled-components'

import variaveis from '../../styles/variaveis'
import { Titulo } from '../../styles'

export const Aside = styled.aside`
  height: 100vh;
  padding: 15px;
  background-color: ${variaveis.azul};
`

export const Campo = styled.input`
  width: 100%;
  height: 2vw;
  border-radius: 15px;
  margin-top: 20px;
  padding: 8px;
`

export const Botao = styled.button`
  border-radius: 20px;
  background-color: ${variaveis.verde};
  width: 10vw;
  height: 4.5vh;
  color: #fff;
  font-weight: bold;
  border: none;
  margin-top: 80vh;

  &: hover {
    background-color: ${variaveis.verde2};
  }
`

export const BotaoVoltar = styled(Botao)`
  background-color: ${variaveis.cinza};
  margin-top: 5vh;

  &: hover {
    background-color: ${variaveis.cinza2};
  }
`

export const TituloPrincipal = styled(Titulo)`
  color: #fff;
`

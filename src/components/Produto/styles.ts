import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import { Botao } from '../../styles'

type Props = {
  cor: string
}

export const Card = styled.div`
  background-color: ${variaveis.branco};
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;

  & > p {
    font-size: 18px;
  }

  & div {
    width: 100%;
  }
`

export const Campo = styled.textarea`
  resize: none;
  width: 50%;
  border: none;
  border-bottom: 2px solid #000;
  background-color: transparent;
  margin: 15px 0;
  font-size: 16px;
`

export const CampoInput = styled.input<Props>`
  display: block;
  margin-bottom: 15px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  background-color: transparent;
  border-bottom: 2px solid ${(props) => props.cor};
`

export const Imagem = styled.button`
  border: none;
  cursor: pointer;

  img {
    width: 35px;
    margin-left: 50px;
  }
`

export const BotaoEDicao = styled(Botao)`
  margin-top: 10px;
  margin-right: 10px;
  background-color: ${variaveis.cinza};
  width: 8vw;

  &: hover {
    background-color: ${variaveis.cinza2};
  }
`

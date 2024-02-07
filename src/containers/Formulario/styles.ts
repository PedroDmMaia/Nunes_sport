import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Container = styled.div`
  padding: 25px;
  background-color: ${variaveis.azulEscuro};
  color: #fff;
`

export const Formulario = styled.form`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Campo = styled.div`
  width: 40vw;
  margin-bottom: 25px;

  label {
    display: block;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    height: 4vh;
    padding: 10px;
    border-radius: 15px;
    border: none;
    background-color: ${variaveis.branco};

    &:focus {
      outline: 1px solid #000;
      background-color: #fff;
    }
  }
`

export const Descricao = styled.textarea`
  width: 100%;
  height: 10vh;
  border-radius: 15px;
  padding: 15px;
  background-color: ${variaveis.branco};

  &:focus {
    outline: 1px solid #000;
    background-color: #fff;
  }
`

export const BotaoEnviar = styled(Botao)`
  margin-top: 20px;
`

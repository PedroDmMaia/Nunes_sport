import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Container = styled.div`
  padding: 25px;
  background-color: ${variaveis.azulEscuro};
  color: #fff;
`

export const Formulario = styled.form`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-itens: center;
`

export const Campo = styled.div`
  label {
    display: block;
  }
`

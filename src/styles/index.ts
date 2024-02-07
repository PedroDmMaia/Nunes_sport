import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Roboto', sans-serif;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const Titulo = styled.h2`
  font-size: 24px;
  font-weight: bold;
  display: block;
  text-align: center;
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

export default EstiloGlobal

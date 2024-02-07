import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Produto from '../../models/produtos'

type Produtostate = {
  itens: Produto[]
}

const initialState: Produtostate = {
  itens: [
    {
      id: 1,
      nome: 'Camiseta',
      codigo: 234567,
      descricao: 'camiseta de algodão',
      preco: 149.9
    },
    {
      id: 2,
      nome: 'Bermuda',
      codigo: 239856,
      descricao: 'bermuda',
      preco: 199.9
    },
    {
      id: 3,
      nome: 'Tênis',
      codigo: 8652188,
      descricao: 'Tenis para corrida',
      preco: 249.9
    }
  ]
}

const produtoSlice = createSlice({
  name: 'produto',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Omit<Produto, 'id'>>) => {
      const produto = action.payload

      if (state.itens.find((item) => item.nome === produto.nome)) {
        alert('item ja cadastrado')
      } else {
        const ultimoProduto = state.itens[state.itens.length - 1]

        const novoProduto = {
          ...action.payload,
          id: ultimoProduto ? ultimoProduto.id + 1 : 1
        }

        state.itens = [...state.itens, novoProduto]
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((item) => item.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Produto>) => {
      const indexProduto = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )

      if (indexProduto >= 0) {
        state.itens[indexProduto] = action.payload
      }
    }
  }
})

export const { adicionar, editar, remover } = produtoSlice.actions
export default produtoSlice.reducer

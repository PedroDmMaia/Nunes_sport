import { configureStore } from '@reduxjs/toolkit'
import produtoReducer from './reducers/produtos'

export const store = configureStore({
  reducer: {
    produto: produtoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

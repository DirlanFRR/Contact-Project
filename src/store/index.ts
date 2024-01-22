import { configureStore } from '@reduxjs/toolkit'

import filtroReducer from './reducers/filtro'
import contactReducer from './reducers/contatos'

const store = configureStore({
  reducer: {
    filtro: filtroReducer,
    contatos: contactReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store

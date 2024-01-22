import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/contact'

type ContactState = {
  itens: Contact[]
}

const initialState: ContactState = {
  itens: [
    {
      id: 1,
      fullName: 'Ranieli',
      email: 'ranieli@email.com',
      phone: '(11) 99999-9999',
      friend: true
    },
    {
      id: 2,
      fullName: 'Gabriel',
      email: 'gabriel@email.com',
      phone: '(11) 99999-9999',
      friend: false
    },
    {
      id: 3,
      fullName: 'Tiago',
      email: 'tiago@email.com',
      phone: '(11) 99999-9999',
      friend: false
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contact>) => {
      const indexDoContato = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contact>) => {
      const contatoJaExiste = state.itens.find(
        (item) =>
          item.fullName.toLowerCase() === action.payload.fullName.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com este nome')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer

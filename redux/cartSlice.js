import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    AddOrIncrement: (state, action) => {
      if (!state.some(item => item.id === action.payload.id)) {
        state.push({ ...action.payload, qty: 1 })
      } else {
        const productToUpdate = state.find(
          prod => prod.id === action.payload.id
        )
        productToUpdate.qty = productToUpdate.qty + 1
      }
    },
    RemoveOrDecrement: (state, action) => {
      const productToUpdate = state.find(prod => prod.id === action.payload)
      if (productToUpdate.qty > 1) {
        productToUpdate.qty = productToUpdate.qty - 1
      } else {
        return state.filter(prod => prod.id !== action.payload)
      }
    },
    RemoveFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload)
    },
    clearCart: () => [],
    calculateTotal: state => {
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.qty,
        0
      )
    }
  }
})

export const {
  AddOrIncrement,
  RemoveOrDecrement,
  clearCart,
  RemoveFromCart,
  calculateTotal
} = cartSlice.actions

export default cartSlice.reducer

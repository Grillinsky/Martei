import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] // Initial state for the cart items
  },
  reducers: {
    addToCart: (state, action) => {
      if (!state.some(item => item.id === action.payload.id)) {
        state.push({ ...action.payload, qty: 1 })
      } else {
        const productToUpdate = state.find(
          prod => prod.id === action.payload.id
        )
        productToUpdate.qty = productToUpdate.qty + 1
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload
      state.items = state.items.filter(item => item.id !== itemId)
      state.cartItemsCount -= 1
    },
    clearCart: state => {
      state.items = []
      state.cartItemsCount = 0
    }
  }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer

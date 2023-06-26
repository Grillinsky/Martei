import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] // Initial state for the cart items
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      state.items.push(item)
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload
      state.items = state.items.filter(item => item.id !== itemId)
    },
    clearCart: state => {
      state.items = []
    }
    // createOrder:
    /*createOrderRequest: state => {
      state.order = { loading: true }
    },
    createOrderSuccess: (state, action) => {
      state.order = { success: true, orderData: action.payload }
    },
    createOrderFailure: (state, action) => {
      state.order = { error: action.payload }
    }*/
  }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer

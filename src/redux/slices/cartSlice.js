import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Actions Creators
    addToCart: (state, action) => {
      const newItem = action.payload
      state.items = [...state.items, newItem]
      // state.items.push(newItem)
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload
      state.items.splice(state.items.indexOf(itemIdToRemove), 1)
      // state.items = state.items.filter((item) => item.id !== itemIdToRemove)
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export const selectCartItems = (state) => state.cart.items

export default cartSlice.reducer

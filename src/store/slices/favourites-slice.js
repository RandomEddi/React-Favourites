import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const favouriteSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    replaceFavourites(state, action) {
      state.items = action.payload.items.sort((a, b) => b.rating - a.rating)
    },
    addFavourite(state, action) {
      let newItem = action.payload.item
      state.items = [...state.items, newItem].sort((a, b) => b.rating - a.rating)
    },
    deleteFavourite(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id)
    }
  }
})

export const favouriteActions = favouriteSlice.actions

export default favouriteSlice
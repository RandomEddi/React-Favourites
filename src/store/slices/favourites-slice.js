import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const favouriteSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    replaceFavourites(state, action) {
      state.items = action.payload.items
    },
    addFavourite(state, action) {
      let newItem = action.payload.item
      state.items = [...state.items, newItem]
    },
    deleteFavourite(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id) 
    }
  }
})

export const favouriteActions = favouriteSlice.actions

export default favouriteSlice
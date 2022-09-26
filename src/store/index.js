import { configureStore} from '@reduxjs/toolkit'
import favouriteSlice from './slices/favourites-slice'
import uiSlice from './slices/ui-slice'


const store = configureStore({
  reducer: {
    favourites: favouriteSlice.reducer,
    ui: uiSlice.reducer,
  }
}) 

export default store
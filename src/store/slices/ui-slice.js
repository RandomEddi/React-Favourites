import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalIsOpen: false,
  notification: null,
  loading: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    onOpenModal(state) {state.modalIsOpen = true},
    onCloseModal(state) {state.modalIsOpen = false},
    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,        
        title: action.payload.title,        
        message: action.payload.message,        
      }
    },
    setLoadingTrue(state) {state.loading = true},
    setLoadingFalse(state) {state.loading = false},
  }
})

export const uiActions = uiSlice.actions

export default uiSlice
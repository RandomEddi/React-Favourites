import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalIsOpen: false,
  notification: {
    status: "error",
    title: "Error...",
    message: 'Something went wrong!'
  },
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    onOpenModal(state) {
      state.modalIsOpen = true
    },
    onCloseModal(state) {
      state.modalIsOpen = false
    },
    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,        
        title: action.payload.title,        
        message: action.payload.message,        
      }
    },
    closeNotification(state) {
      state.notification = null
    }
  }
})

export const uiActions = uiSlice.actions

export default uiSlice
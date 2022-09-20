import React, { useState } from 'react'


const AddFavouriteContext = React.createContext({
  isModalOpen: false,
  modalOnCloseHandler: () => {},
  modalOnOpenHandler: () => {},
})

const AddFavouriteProvider = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const modalOnCloseHandler = () => setIsModalOpen(false)
  
  const modalOnOpenHandler = () => setIsModalOpen(true)
    
  
  return (
    <AddFavouriteContext.Provider value={{
      isModalOpen,
      modalOnCloseHandler,
      modalOnOpenHandler,
    }}>
      {props.children}
    </AddFavouriteContext.Provider>
  )
}
export default AddFavouriteContext
export {AddFavouriteProvider}

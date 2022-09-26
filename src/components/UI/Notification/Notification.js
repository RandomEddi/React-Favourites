import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.ui.notification)
  let cssClasses = "fixed left-[40%] text-center flex flex-col z-50 px-6 py-3 rounded-md transition duration-500"

  if (notification) {
    if (notification.status === 'error') {
      cssClasses += " bg-red-500 translate-y-10"
    } else if (notification.status === 'success') {
      cssClasses += " bg-green-500 translate-y-10"
    } else if (notification.status === "close") {
      cssClasses += " -translate-y-10"
    } else {
      cssClasses += " bg-white translate-y-10"
    }
  }
  
  return (
    <>
    {notification && <div className={cssClasses}>
      <h2 className='text-black font-bold'>{notification.title}</h2>
      <p className='text-black font-bold text-2xl'>{notification.message}</p>
      <div></div>
    </div>}
    </>
  )
}
export default Notification
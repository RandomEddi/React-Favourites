import React from 'react'

const Notification = (props) => {
  let cssClasses = "fixed left-[40%] text-center flex flex-col z-50 px-6 py-3 rounded-md transition duration-500"
  let {title, message, status} = props
  if (status === 'error') {
    cssClasses += " bg-red-500 translate-y-10"
  } else if (status === 'success') {
    cssClasses += " bg-green-500 translate-y-10"
  } else if (status === "close") {
    cssClasses += " -translate-y-10"
  } else {
    cssClasses += " bg-white translate-y-10"
  }
  return (
    <div className={cssClasses}>
      <h2 className='text-black font-bold'>{title}</h2>
      <p className='text-black font-bold text-2xl'>{message}</p>
      <div></div>
    </div>
  )
}
export default Notification
import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-[80vh] overflow-hidden'>
      <div className="lds-hourglass"></div>
    </div>
  )
}
export default Loading
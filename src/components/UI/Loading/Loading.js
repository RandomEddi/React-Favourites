import React from 'react'
import './Loading.css'
import { useSelector } from 'react-redux'

const Loading = () => {
  const loading = useSelector(state => state.ui.loading)
  return (
    <>
    {loading &&
      <div className='flex justify-center items-center h-[80vh] overflow-hidden'>
        <div className="lds-hourglass"></div>
      </div>
    }
    </>
  )
}
export default Loading
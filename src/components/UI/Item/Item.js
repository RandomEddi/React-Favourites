import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteFavourite } from '../../../store/favourites-action'
import { uiActions } from '../../../store/slices/ui-slice'

const Item = (props) => {
  const dispatch = useDispatch()
  const ratingStars = () => {
    let ratingArray = []

    for (let i = 1; i< 6; i++) {
      if (props.rating >= i) {
        ratingArray.push(<div className='text-yellow-400' key={i}>&#9733;</div>)
      } else {
        ratingArray.push(<div key={i}>&#9733;</div>)
      }
    }
    return ratingArray
  }

  return (
    <div className='flex flex-col items-center'>
      <div>
        <div className='flex flex-col items-center'>
        <img className='w-[300px] h-[440px]' alt='favourite' src={props.url}></img>
        <p className='text-2xl font-bold mt-1 text-center max-w-[250px]'>{props.title}</p>

        </div>
      <div className='flex justify-between text-4xl 470px:justify-center 470px:flex-col items-center'>
        <div className='flex text-gray-700 select-none' id='ratings'>
          {ratingStars()}
          </div>
        <div className='cursor-pointer select-none' onClick={() => {
          dispatch(deleteFavourite(props.id))
          setTimeout(() => {
            dispatch(uiActions.setNotification({
              status: "close",
              title: "",
              message: "",
            }))
          }, 2000)
          }}>&#128465;</div>
      </div>
      </div>
    </div>
  )
}
export default Item
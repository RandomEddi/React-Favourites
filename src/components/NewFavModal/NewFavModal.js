import { useRef, useState} from 'react'
import ReactDOM from 'react-dom';
import Input from '../UI/Input/Input';
import styles from './NewFavModal.module.css'
import Button from '../UI/Button/Button'
import useInput from '../../store/hooks/use-input';
import { useDispatch, useSelector } from 'react-redux' 
import { uiActions } from '../../store/slices/ui-slice';
import { addFavourite } from '../../store/favourites-action';


const NewFavModal = () => {
  const dispatch = useDispatch()
  const [usingFile, setUsingFile] = useState(false)
  const [ratingStars, setRatingStart] = useState(0)
  const typeOfFavourite = useRef()
  const rating = useRef()
  const modalIsOpen = useSelector(state => state.ui.modalIsOpen)
  
  const {
    value: titleValue,
    valueChangeHandler: titleChangeHandler,
    valueIsValid: titleIsValid,
    inputBlurHandler: titleBlurHandler,
    hasError: titleHasEror,
    reset: resetTitleValue,
  } = useInput((val) => val.trim() !== '' && val.length > 2)
  
  const {
    value: urlValue,
    valueChangeHandler: urlChangeHandler,
    valueIsValid: urlIsValid,
    inputBlurHandler: urlBlurHandler,
    hasError: urlHasEror,
    reset: resetUrlValue,
  } = useInput(val => val.includes('.'))
  
  
  
  const ratingHandler = (event) => {
    
    let ratingChildren = rating.current.children
    let ended = false
    setRatingStart(0)
    Array.from(ratingChildren).forEach(child => child.classList.remove(styles.activeStar))

    for (let node of ratingChildren) {
      if (ended) {
        break
      }
      if (event.target === node) {
        ended = true
      }
      setRatingStart(prev => prev + 1)
      node.classList.add(styles.activeStar)
    }
  }
  const ratingOnPressHandler = (event) => {
    if (event.code !== 'Space') {
      return
    }
    event.preventDefault()
    let ratingChildren = rating.current.children
    let ended = false
    setRatingStart(0)
    Array.from(ratingChildren).forEach(child => child.classList.remove(styles.activeStar))

    for (let node of ratingChildren) {
      if (ended) {
        break
      }
      if (event.target === node) {
        ended = true
      }
      setRatingStart(prev => prev + 1)
      node.classList.add(styles.activeStar)
    }
  }
  const fileHandler = (e) => {
    setUsingFile(URL.createObjectURL(e.target.files[0]))
  }

  const submitFormHandler = (e) => {
    e.preventDefault()

    if (!formValid) {
      return
    }
    
    dispatch(addFavourite({
      title: titleValue,
      rating: ratingStars,
      url: usingFile ? usingFile : urlValue,
      type: typeOfFavourite.current.value,
    }))
    setUsingFile(false)
    resetTitleValue()
    resetUrlValue()
    dispatch(uiActions.onCloseModal())
    setTimeout(() => {
      dispatch(uiActions.setNotification({
        status: "close",
        title: "",
        message: "",
      }))
    }, 2000)
  }
  
  let titleInputClasses = !titleHasEror ? styles.modalInput : styles.modalInput + " " + styles.invalidInput

  let urlInputClasses = !urlHasEror ? styles.modalInput : styles.modalInput + " " + styles.invalidInput

  let filelabelClasses = !usingFile ? styles.modalLabelFile : styles.fileActive + ' ' + styles.modalLabelFile

  let formValid = false

  if (titleIsValid && (urlIsValid || !!usingFile) && ratingStars > 0) {
    formValid = true
  }
  
  return ReactDOM.createPortal(
    <>
    {modalIsOpen && <>
      <div className='fixed inset-0 bg-black bg-opacity-40' onClick={() => dispatch(uiActions.onCloseModal())}></div>
      <div className='fixed left-1/3 top-[22%] w-1/3 h-[56%] Max670px:left-[20%] Max670px:w-[60%] Max670px:top-[10%]
      Max670px:h-[80%] Max370px:left-0 Max370px:w-full bg-white rounded-xl px-3'>
        <form className='flex flex-col items-center justify-center h-full gap-y-2'>
          <div className='flex flex-col gap-y-4 mt-4 mb-3'>
            <Input
            divClass={styles.modalGroup}
            inputClass={titleInputClasses}
            labelClass={styles.modalLabel}
            id='title'
            labelTitle='Title'
            type='text'
            placeholder='Title'
            value={titleValue}
            changeHandler={titleChangeHandler}
            blurHandler={titleBlurHandler}
            />
          </div>
          <div ref={rating} className='flex text-4xl text-gray-700 cursor-pointer select-none' onClick={ratingHandler} onKeyDown={ratingOnPressHandler}>
            <div tabIndex='0' className=''>&#9733;</div>
            <div tabIndex='0' className=''>&#9733;</div>
            <div tabIndex='0'>&#9733;</div>
            <div tabIndex='0'>&#9733;</div>
            <div tabIndex='0'>&#9733;</div>
          </div>
          <div className="flex flex-col items-center mt-3">
            <div className=''>
              <label htmlFor='file' className={filelabelClasses}>photo as file</label>
              <input className={styles.modalInputFile} placeholder='' type='file' onChange={fileHandler} id='file' accept='image/*'/>
            </div>
            <span className="font-bold text-4xl my-3">OR</span>
            <Input
            divClass={styles.modalGroupUrl}
            inputClass={urlInputClasses}
            labelClass={styles.modalLabelUrl}
            id='url'
            labelTitle='url on photo'
            type='url'
            placeholder='url'
            value={urlValue}
            changeHandler={urlChangeHandler}
            blurHandler={urlBlurHandler}
            />
          </div>
          <select ref={typeOfFavourite} className='outline-none mt-3 p-3 text-3xl text-purple-900 font-bold'>
            <option className='text-3xl'>Movie</option>
            <option className='text-3xl'>Serial</option>
          </select>
          <Button className="bg-purple-900 text-white font-bold rounded-md py-2.5 px-3 disabled:bg-gray-500" onClick={submitFormHandler} type='submit' disabled={!formValid}>Add new Favourite</Button>
        </form>
      </div>
    </>}
  </>,
    document.querySelector('#modal')
  )
}

export default NewFavModal
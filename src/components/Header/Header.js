import React from 'react'
import Button from '../UI/Button/Button'
import styles from './Header.module.css'
import { uiActions } from '../../store/slices/ui-slice'
import { useDispatch} from 'react-redux'

const Header = (props) => {
  const dispatch = useDispatch()
  const activeBtn = styles.btn + ' ' + styles.btnActive

  const btnTypeHandler = (e) => {
    if (e.target.className !== activeBtn) {
      Array.from(document.querySelector('#btn-container').children).forEach(btn => btn.classList.remove(styles.btnActive))
      e.target.classList.add(styles.btnActive)
      props.onChangeTypes(e.target.dataset.type)
    } 
    
  }
  return (
    <header className='relative top-0 left-0 bg-purple-900 right-0 h-20 MaxLg:px-5'>
      <div className='container mx-auto flex justify-between items-center h-full'>
        <div className='flex gap-x-5 MaxLg:gap-x-2' id="btn-container">
          <Button type='button' className={activeBtn} dataset='Movie' onClick={btnTypeHandler}>Movies</Button>
          <Button type='button' className={styles.btn} dataset='Serial' onClick={btnTypeHandler}>Serials</Button>
        </div>
        <div>
          <Button type='button' className={styles.btn} onClick={() => {
            dispatch(uiActions.onOpenModal())
          }}>Add Favourite</Button>
        </div>
      </div>
    </header>
  )
}
export default React.memo(Header)
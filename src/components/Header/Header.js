import React, {useContext} from 'react'
import Button from '../UI/Button/Button'
import styles from './Header.module.css'
import AddFavouriteContext from '../../store/context/add-favourite-context'

const Header = (props) => {
  const modalCtx = useContext(AddFavouriteContext)
  const activeBtn = styles.btn + ' ' + styles.btnActive

  const btnTypeHandler = (e) => {
    if (e.target.className !== activeBtn) {
      Array.from(document.querySelector('#btn-container').children).forEach(btn => btn.classList.remove(styles.btnActive))
      e.target.classList.add(styles.btnActive)
      props.onChangeTypes(e.target.dataset.type)
    } 
    
  }

  return (
    <header className='relative top-0 left-0 bg-purple-900 right-0 h-20'>
      <div className='container mx-auto flex justify-between items-center h-full'>
        <div className='flex gap-x-5' id="btn-container">
          <Button type='button' className={activeBtn} dataset='Movie' onClick={btnTypeHandler}>Movies</Button>
          <Button type='button' className={styles.btn} dataset='Serial' onClick={btnTypeHandler}>Serials</Button>
        </div>
        <div>
          <Button type='button' className={styles.btn} onClick={modalCtx.modalOnOpenHandler}>Add Favourite</Button>
        </div>
      </div>
    </header>
  )
}
export default Header
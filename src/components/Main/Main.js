import React from 'react'
import Item from '../UI/Item/Item'

const Main = (props) => {
  return (
    <main className='container mx-auto mt-6'>
      <div className='grid gap-y-16 grid-cols-4 1400px:grid-cols-3 1060px:grid-cols-2 670px:grid-cols-1'>
        {props.data.map(fav => <Item key={fav.id} id={fav.id} title={fav.title} url={fav.url} rating={fav.rating} onDelete={props.onDelete}/>)}
        </div>
    </main>
  )
}
export default Main
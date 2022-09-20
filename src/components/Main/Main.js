import React from 'react'
import Item from '../UI/Item/Item'

const Main = (props) => {
  return (
    <main className='container mx-auto mt-6'>
      <div className='grid gap-y-16 grid-cols-4 MaxXl:grid-cols-3 MaxLg:grid-cols-2 MaxSm:grid-cols-1'>
        {props.data.map(fav => <Item key={fav.id} id={fav.id} title={fav.title} url={fav.url} rating={fav.rating} onDelete={props.onDelete}/>)}
        </div>
    </main>
  )
}
export default Main
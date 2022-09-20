import React from 'react'

const Input = (props) => {
  return (
    <div className={props.divClass}>
      <label htmlFor={props.id} className={props.labelClass}>{props.labelTitle}</label>
      <input className={props.inputClass} placeholder={props.placeholder} type={props.type} value={props.value} onChange={props.changeHandler} onBlur={props.blurHandler} id={props.id} accept={props.accept ? props.accept : ''}/>
    </div>
  )
}
export default Input
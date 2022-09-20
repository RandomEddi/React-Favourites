import React from 'react'

const Button = (props) => {
  return (
    <button className={props.className} type={props.type} onClick={props.onClick} data-type={props.dataset ? props.dataset : ''} disabled={props.disabled}>{props.children}</button>
  )
}
export default Button
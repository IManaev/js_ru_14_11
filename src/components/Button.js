import React from 'react'

const Button = (props={label:'Button',onClick:()=>{},passProps:{}}) => {
  return (
    <div onClick={props.onClick} {...props.passProps}>
      {props.label}
    </div>
  )
}

export default Button

import React from 'react'
const Comment = (props = {data:{}}) => {
  return (
    <div>
      <div>{props.data.text}</div>
      <div>{props.data.user}</div>
    </div>
  )
}
export default Comment

import React from 'react'

const ListView = (props={data:[],component:()=>{},className:null,passProps:{},keyFunc:()=>{}}) => {
  return (
    <ul className={props.className}>
        {props.data.map((item)=><li key={props.keyFunc(item)} ><props.component data={item} {...props.passProps}/></li>)}
    </ul>
  )
}

export default ListView

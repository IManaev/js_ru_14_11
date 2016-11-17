import React from 'react'

const ListView = (props={data:[],component:()=>{},class:null,passProps:{},keyFunc:()=>{}}) => {
  return (
    <ul className={props.class}>
        {props.data.map((item)=><li key={props.keyFunc(item)} ><props.component data={item} {...props.passProps}/></li>)}
    </ul>
  )
}

export default ListView

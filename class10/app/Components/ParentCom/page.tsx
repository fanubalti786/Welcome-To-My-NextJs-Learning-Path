import React from 'react'
import ChildCom from './ChildCom/page'


export default function ParentCom({nameState}:any) {
  return (
    <div>
      ParentCom Context:
      <ChildCom nameState = {nameState}/>
    </div>
  )
}

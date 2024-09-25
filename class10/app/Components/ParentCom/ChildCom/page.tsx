import React from 'react'
import GrandChilCom from '../GrantChildCom/page'


export default function ChildCom({nameState}:any) {
  return (
    <div>
      ChildCom Content:
      <GrandChilCom nameState = {nameState}/>
    </div>
  )
}

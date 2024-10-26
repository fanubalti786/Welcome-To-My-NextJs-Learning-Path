import React from 'react'
import GrandChilCom from '../GrantChildCom/page'
import { Mycontext } from '@/Context/MyContext'
import { useContext } from 'react'


export default function ChildCom() {
  const {name, setName}:any = useContext(Mycontext)
  return (
    <div>
      ChildCom Content:{name}
      <GrandChilCom/>
    </div>
  )
}

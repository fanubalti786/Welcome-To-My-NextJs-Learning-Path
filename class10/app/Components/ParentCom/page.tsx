"use client"
import { Mycontext } from '@/Context/MyContext'
import { useContext } from 'react'
import React from 'react'
import ChildCom from './ChildCom/page'


export default function ParentCom() {
  const ourContext:any = useContext(Mycontext)
  const {name,setName} = ourContext
  return (
    <div>
      ParentCom Context: {name}
      <ChildCom/>
    </div>
  )
}

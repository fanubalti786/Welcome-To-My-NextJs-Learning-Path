"use client"
import { Mycontext } from '@/Context/MyContext'
import { useContext } from 'react'
import React from 'react'
import ChildCom from './ChildCom/page'


export default function ParentCom() {
  const ourContext:any = useContext(Mycontext)
  const data = ourContext
  return (
    <div>
      ParentCom Context: {data.name}
      <ChildCom/>
    </div>
  )
}

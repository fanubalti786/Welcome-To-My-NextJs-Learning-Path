"use client"
import { Mycontext } from '@/Context/MyContext'
import React,{useContext} from 'react'

export default function GrandChilCom() {
  const ourContext:any = useContext(Mycontext)
  const {name, setName} = ourContext
  console.log(ourContext)
  return (
    <div>
      GrandChildCom Content: {name}
      
    </div>
  )
}

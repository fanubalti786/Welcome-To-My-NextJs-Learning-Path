"use client"
import { Mycontext } from '@/Context/MyContext'
import React,{useContext} from 'react'

export default function GrandChilCom() {
  const ourContext:any = {...useContext(Mycontext)}// destructure can't be matter for context Api
  const {name, setNameState} = ourContext
  console.log(ourContext)
  return (
    <div>
      GrandChildCom Content: {name}
      <br />
      <button className="bg-slate-600 p-3 ml-10" onClick={()=> setNameState("irfan")}>State</button>
      
    </div>
  )
}

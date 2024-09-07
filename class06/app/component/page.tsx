"use client"
import React from 'react'

export default function Button() {

    const counter = 0
  return (
    <div>
       <button className='bg-gray-600 p-7' onClick={()=> console.log("hello")} >+</button>
      <span className="p-3">{counter}</span>
      <button className='bg-gray-600 p-7 px-8' onClick={()=> {console.log("True")}}>-</button>
    </div>
  )
}

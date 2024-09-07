"use client"
import React from 'react'

export default function Button() {
  return (
    <div>
       <button className='bg-gray-600 p-7' >+</button>
      <span className="p-3">counter</span>
      <button className='bg-gray-600 p-7 px-8'>-</button>
    </div>
  )
}

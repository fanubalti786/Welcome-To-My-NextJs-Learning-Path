"use client"
import React from 'react'
import { useSelector } from 'react-redux'

export default function page() {
  const counterState = useSelector((state:any) => state)
  console.log(counterState)
  return (
    <div>
      <div className='border-2 '>hello</div>
    </div>
  )
}


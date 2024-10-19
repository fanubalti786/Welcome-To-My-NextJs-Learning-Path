"use client"
import React from 'react'
import { useSelector } from 'react-redux'
export default function Home() {
  const counterState = useSelector((state) => state)
  console.log("counterState",counterState)
  return (
    
      <div>hello world</div>
    
  )
}

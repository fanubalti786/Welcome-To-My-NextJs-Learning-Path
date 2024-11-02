"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../components/Button/page'



export default function Home() {
  const counterState = useSelector((state:any) => state.Counter)
  console.log(counterState)
  return (
    
    
      <div className='border-2 '>Counter-{counterState.counter} and  Adder-{counterState.adder}
      <hr />
      <Button/>
      </div>

    
  )
}

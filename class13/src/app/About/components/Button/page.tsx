"use client"
import React from 'react'
import { useSelector } from 'react-redux'



export default function Button2() {
  const counterState = useSelector((state:any) => state.Counter)
  console.log(counterState)
  return (
    
    
      <div className='border-2 '>Counter-{counterState.counter} and  Adder-{counterState.adder}
        
        <hr />
        <div>
            <button>AboutComponentButton</button>
        </div>
        
        </div>

    
  )
}

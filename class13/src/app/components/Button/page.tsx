"use client"
import React from 'react'
import { useSelector } from 'react-redux'



export default function Button() {
  const counterState = useSelector((state:any) => state.Counter)
  console.log(counterState)
  return (
    
    
      <div className='border-2 '>
        
        Counter-{counterState.counter} and  Adder-{counterState.adder}
        <div>
            <button>MainComponentButton</button>
            
        </div>

      
      
      </div>
      

    
  )
}

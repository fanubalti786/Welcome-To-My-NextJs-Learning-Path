"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter} from '@/store/counter/counterSlicer'
import Button2 from '../Button/page'
import Button from '@/app/components/Button/page'



export default function Form() {
  const counterState = useSelector((state:any) => state.Counter)
  const dispatch = useDispatch()
  const onClickHandler = ()=>
  {
    dispatch(incrementCounter())
    

  }
  return (
    
    
      <div className='border-2 '>
        Counter-{counterState.counter} 

        <div><button onClick={onClickHandler} className={'border-2 border-black p-1 px-2 m-1 bg-green-500'}  >Click</button></div>
        
        <hr />
        <div>
            <button>AboutComponentForm</button>
            <Button/>
            <hr />
            

            <hr />
            
        </div>
        
        </div>

    
  )
}
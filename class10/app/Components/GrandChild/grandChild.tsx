import React from 'react'
import { Mycontext } from '@/Context/MyContext'
import { useContext } from 'react'
export default function grandChild() {
    const {name , setName}:any = useContext(Mycontext)
  return (
    <div>
      GrandChild: {name} // can't be show bc its not a children of Parent component
    </div>
  )
}

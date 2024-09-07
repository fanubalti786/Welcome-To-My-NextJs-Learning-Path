"use client"
import { useState,useEffect } from 'react'
import React from 'react'

// export default function Button() {

//     const counter = 0
//   return (
//     <div>
//        <button className='bg-gray-600 p-7' onClick={()=> console.log("hello")} >+</button>
//       <span className="p-3">{counter}</span>
//       <button className='bg-gray-600 p-7 px-8' onClick={()=> {console.log("True")}}>-</button>
//     </div>
//   )
// }

// export default function Button() {

//     const counter = 0
//   return (
//     <div>
//        <button className='bg-gray-600 p-7' onClick={()=> {counter === counter + 1}} >+</button>
//       <span className="p-3">{counter}</span>
//       <button className='bg-gray-600 p-7 px-8' onClick={()=> {counter === counter - 1}}>-</button>
//     </div>
//   )
// }




// export default function Button() {

//     let counter = 0

//     function handleMinus(){
//         counter = counter - 1
//         console.log(counter);

//     }

//     function handlePlus(){
//         counter = counter + 1
//         console.log(counter);
//     }

   
//   return (
//     <div>
//        <button className='bg-gray-600 p-7' onClick={handleMinus} >+</button>
//       <span className="p-3">{counter}</span>
//       <button className='bg-gray-600 p-7 px-8' onClick={handlePlus}>-</button>
//     </div>
//   )
// }




export default function Button() {

    let [counter, setcounter] = useState(0)
//jsx

    function handleMinus(){
        // setcounter(counter-1)
        // let newCounter = counter - 1
        // setcounter(newCounter)

        setcounter((previous) => {

            if(previous === 0)
                return previous
            else 
            return previous - 1
            

        }  )

        

    }

    function handlePlus(){
        // setcounter(counter+1)
        // let newCounter = counter + 1
        // setcounter(newCounter)

        setcounter((previous) => {

            if(previous >= 10)
                return 0
            else 
            return previous + 1

        }  )
        
    }

    useEffect(()=> 
    {
        console.log("Render")
    })
    


   
  return (
    <div>
       <button className='bg-gray-600 p-7' onClick={handleMinus} >-</button>
      <span className="p-3">{counter}</span>
      <button className='bg-gray-600 p-7 px-8' onClick={handlePlus}>+</button>
    </div>
  )
}
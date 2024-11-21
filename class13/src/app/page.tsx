"use client"
import React from 'react'
import { Provider} from 'react-redux'
import Form from './About/components/Form/page'
import store from '@/store/store'
import User from './About/components/User/page'
import { incrementCounter } from '@/store/counter/counterSlicer'
import Button2 from './About/components/Button/page'
// import { useDispatch,useSelector} from 'react-redux'




export default function page() {

  // const counterState = useSelector((state:any) => state.Counter)

  // const dispatch = useDispatch()

  // const onClickHandler = () =>
  // {
  //   dispatch(incrementCounter())
  // }
  
  return (
    
    
      <div className='border-2 '>Counter-{} and  Adder-{}
      <hr />

      <div>
        <Provider store={store}>
          {<Form/>}
        </Provider>

        <button className='border-2 px-3 py-2 '>clickMe!</button>

        <Button2/>

        {/* <User/> */}


      </div>

      </div>

    
      
    
    
    
  )
}


"use client"
import React from 'react'
import store  from '@/store/store'
import { Provider } from 'react-redux'

export default function ReduxProvider({Children}:any) {
  return (
    <Provider store={store}>
        <div>
          {Children}
      </div>
    </Provider>
    
  )
}




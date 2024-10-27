import {configureStore} from "@reduxjs/toolkit"
import CounterSlicerReducer from "./counter/counterSlicer"
export const store = configureStore({
    reducer:{
        counter:CounterSlicerReducer

        
    },
})
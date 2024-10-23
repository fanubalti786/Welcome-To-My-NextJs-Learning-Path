import {configureStore} from "@reduxjs/toolkit"
import CounterSlicerReducer from "./counter/counterSlicer"
const store = configureStore({
    reducer:{
        counter:CounterSlicerReducer

        
    },
})

export default store;
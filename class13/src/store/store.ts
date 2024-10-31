import {configureStore} from "@reduxjs/toolkit"
import CounterSlicer from "./counter/counterSlicer"
const store = configureStore({
    reducer:{
        Counter:CounterSlicer

        
    },
})

export default store;
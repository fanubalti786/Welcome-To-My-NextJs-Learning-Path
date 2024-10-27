import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter:0
}

const CounterSlicer = createSlice({
    name:"counterSlicer",
    initialState:initialState,
    reducers:{
        incrementCounter:(state)=> {
            state.counter + 1;
            
        },

        decrementCounter:(state)=> {
            state.counter - 1;
        }
    }


})


export const {incrementCounter,decrementCounter} = CounterSlicer.actions
export default CounterSlicer.reducer;


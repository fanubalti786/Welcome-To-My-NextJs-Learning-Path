import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter:0
}

const counterSlicer = createSlice({
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

console.log(state)

export const {incrementCounter,decrementCounter} = counterSlicer.actions
export default counterSlicer.reducer;


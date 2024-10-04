"use client"
import { createContext, useState } from "react";

export const Mycontext = createContext({});

export function ContextProvider({children}:any){
    
    const [name,setNameState] = useState("Fanu Balti")

    return(
        <Mycontext.Provider value={{name,setNameState}}>
            {children}
        </Mycontext.Provider>
    )
}
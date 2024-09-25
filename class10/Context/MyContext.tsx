"use client"
import { createContext, useState } from "react";

export const Mycontext = createContext({});

export function ContextProvider({children}:any){
    const [name,nameState] = useState("Fanu Balti")

    return(
        <Mycontext.Provider value={{name,nameState}}>
            {children}
        </Mycontext.Provider>
    )
}
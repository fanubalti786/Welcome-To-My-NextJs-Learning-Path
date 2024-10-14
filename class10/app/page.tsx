"use client"
import Image from "next/image";
import { ContextProvider } from "@/Context/MyContext";
import ParentCom from "./Components/ParentCom/page";
import { Mycontext } from "@/Context/MyContext";
import { useContext } from "react";




export default function Home() {
const {name,setName}:any = useContext(Mycontext)

  return (
   <div>
    {/* Not be working i don't know */}
    {/* <div>Home:{name}</div> */}
    <ContextProvider>

        <ParentCom/>

    </ContextProvider>
     
   </div>
   

  );
}

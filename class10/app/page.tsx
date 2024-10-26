"use client";
import Image from "next/image";
import { ContextProvider } from "@/Context/MyContext";
import { Mycontext } from "@/Context/MyContext";
import { useContext } from "react";
import ParentCom from "./Components/ParentCom copy/page";
import ChildCom from "./Components/ChildCom/page";


export default function Home() {
  const { name, setName }: any = useContext(Mycontext);

  return (
      <div>
        
      <h1>Home:{name}</h1>

      <ContextProvider>
        
        <ParentCom/>
      
    </ContextProvider>
    <ChildCom/>
    </div>
  );
}

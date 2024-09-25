"use client";
import Image from "next/image";
import ParentCom from "./Components/ParentCom/page";
import { useState } from "react";
import GrandChilCom from "./Components/ParentCom/GrantChildCom/page";


export default function Home() {

  const [name,setName] = useState("irfan Haider")
  return (
   <div>
      <ParentCom nameState = {name}/>
      <GrandChilCom nameState = {name}/>
   </div>
   

  );
}

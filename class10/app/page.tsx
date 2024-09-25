import Image from "next/image";
import ParentCom from "./Components/ParentCom/page";
import { ContextProvider } from "@/Context/MyContext";



export default function Home() {


  return (
   <div>
    <ContextProvider>

        <ParentCom/>

    </ContextProvider>
     
   </div>
   

  );
}

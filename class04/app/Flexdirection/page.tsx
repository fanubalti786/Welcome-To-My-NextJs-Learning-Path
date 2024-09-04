import React from "react";

export default function News() {
  return (
    <div className=" h-[100%] flex flex-col justify-center border-2 border-pink-500">

      <div className="flex bg-green-500 justify-center">
        <div className="  border-2 bg-orange-400 ">01</div>
        <div className="  border-2 bg-orange-400 ">02</div>
        <div className="  border-2 bg-orange-400 ">03</div>
      </div>

      <div className="flex flex-col-reverse flex-stretch ">
        <div className="  border-2 bg-orange-400  ">01</div>
        <div className="  border-2 bg-orange-400 ">02</div>
        <div className="  border-2 bg-orange-400 ">03</div>
      </div>


      <div className="flex flex-wrap justify-center ">
        <div className=" w-[25rem]  border-2 bg-orange-400 ">01</div>
        <div className=" w-[25rem] border-2 bg-orange-400 ">02</div>
        <div className=" w-[25rem] border-2 bg-orange-400 ">03</div>
      </div>

      <div className="flex flex-wrap-reverse justify-center ">
        <div className=" w-[25rem]  border-2 bg-orange-400 ">01</div>
        <div className=" w-[25rem] border-2 bg-orange-400 ">02</div>
        <div className=" w-[25rem] border-2 bg-orange-400 ">03</div>
      </div>


    </div>
  );
}

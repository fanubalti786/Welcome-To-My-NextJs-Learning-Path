import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-teal-700 font-bold">
      <div className=" flex flex-col border-1 border-white rounded-[5px] w-[450px] h-[250px] bg-slate-600">
        <h1 className="text-center border-2 border-amber-900 bg-amber-800 p-2  ">To Do List</h1>

        <div className=" flex-1 border-2 border-slate-700 ">
          <div className="flex mt-7 flex-col justify-center items-center">
            <div className="">
              <input 
                className="rounded-[3px] px-9 py-1.5 bg-slate-200"
                type="text"
                placeholder="Per Day Task"

              />
              <button className=" ml-0.5 rounded-[3px] px-3 py-1.5 text-white bg-red-900 ">Done</button>

              <div className="border-2 rounded-[3px] mt-[10px] bg-white">
              <ul className="flex ">
                <li className="pt-[6px] pl-[2px]">No Work</li>
                <div className=" ml-[122px] flex mb-1">
                <button className="border-3 border-green-700 px-1 py-0.5 mt-[3px] mr-[2px]  rounded-[3px] bg-green-700">Complete</button>
                <button className="border-2 border-red-800 px-1   mt-[3px] rounded-[3px] bg-red-700">Remove</button>
                </div>
            
                
              </ul>


              </div>
              

              
            </div>


           


          </div>

         
        </div>
      </div>
    </div>
  );
}
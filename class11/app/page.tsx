"use client";
import Image from "next/image";
import { list } from "postcss";
import { useState } from "react";
import picture  from "@/image/card.jpg"
import { toDoList } from "@/Type/type";

export default function Home() {
  const [toDoItems,setToDoItems]= useState([])
  const [inputTextField, setInputTextField] = useState("");
  const [compItem, setComItem] = useState<any>([])
  let irfan=[];

  const addToDoList = () => {
    // const toDoItemscopy: any = toDoItems;
    const toDoItemscopy: any = [...toDoItems];

    if(inputTextField)
    {
      // console.log("True")
      toDoItemscopy.push(inputTextField);
    }
    else{
      alert("please fill the input")
    }
    // console.log(toDoItemscopy);
    setToDoItems(toDoItemscopy);
    setInputTextField("");
    // const newTask = inputTextField;
    // setToDoItems([...toDoItems,newTask]);
    
  };


  const removeTodoItem = (index:any) => {
    const removeItem: any = [...toDoItems];
    removeItem.splice(index,1)
    setToDoItems(removeItem);
   
  };

  const completeItem = (item:any) => {
    const completenew:any = [...compItem]
    completenew.push(item)
    setComItem(completenew)
    
  };

  console.log(compItem)

  // console.log(finishItem);

  return (
    
    <div className="flex justify-center items-center h-screen bg-teal-700 font-bold">
      <div className={toDoItems.length>3?"flex flex-col border-1 border-white rounded-[5px] w-[450px] h-[400px] bg-slate-600 overflow-scroll"
      :
      " flex flex-col border-1 border-white rounded-[5px] w-[450px] h-[250px] bg-slate-600"}>
        <h1 className="text-center border-2 border-amber-900 bg-amber-800 p-2  ">
          To Do List
        </h1>

        <div className=" flex-1 border-2 border-slate-700 ">
          <div className="flex mt-7 flex-col justify-center items-center">
            <div className="">
              <input
                className="rounded-[3px] pr-12 pl-1 py-1.5 bg-slate-300"
                type="text"
                placeholder ="Enter Your Tasks"
                value={inputTextField}
                onChange={(e) => setInputTextField(e.target.value)}
              />
              <button
                className=" ml-0.5 rounded-[3px] px-3 py-1.5 text-white bg-red-900 hover:bg-red-950 transition "
                onClick={() => addToDoList()}
              >
                Add
              </button>

              {toDoItems.length > 0 ? 
              toDoItems.map((item:any,index:any)=>
              {
                let markComplete;
                // const markComplete = compItem.includes(item)
                // console.log(markComplete)
                {compItem.map((value:any)=>
                {
                  if(value=== item)
                  {
                    markComplete = true;
                  }
                })}
                

                return(
                  <div className={markComplete? " border-2 rounded-[3px] mt-[5px] bg-green-500" : "border-2 rounded-[3px] mt-[5px] bg-slate-200"}>
                  <ul className="flex ">
                    <li className={markComplete?"flex-1 ml-[3px]":"flex-1 mt-[4px] ml-[3px]"}>{item}</li>

                    {
                      markComplete?

                      <button className=" mx-1 py-[2px]">{"✔"}</button> :
                      
                    <>
                    <div className="  flex p-[2px]">
                      <button className="border-2 border-green-700 mr-[2px] 
                       rounded-[3px] bg-green-700" onClick={()=> 
                       completeItem(item)
                        }>
                        Complete
                      </button>
                      <button className="border-2 border-red-800    rounded-[3px]
                       bg-red-700" onClick={()=> removeTodoItem(index)}>
                        Remove
                      </button>
                    </div>
                    </>
                    
                    }
                  </ul>
                </div>
                )
              })
                
              : 
              <div className="flex border-2 border-yellow-500 rounded-[3px] mt-[7px] bg-yellow-200">
                <div className="flex-1">Manage your Tasks!</div>
                <div>{"😊"}</div>
              </div>
                
              }

              
            </div>
          </div>
        </div>
      </div>

      {/* <img src="picture" alt="notfound" /> */}
    </div>
  );
}

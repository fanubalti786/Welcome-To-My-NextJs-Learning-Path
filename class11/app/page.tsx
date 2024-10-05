"use client";
import Image from "next/image";
import { todo } from "node:test";
import { list } from "postcss";
import { useState } from "react";

export default function Home() {
  const [toDoItems, setToDoItems] = useState([]);
  const [inputTextField, setInputTextField] = useState("");

  const addToDoList = () => {
    const toDoItemscopy: any = [...toDoItems];
    toDoItemscopy.push(inputTextField);
    setToDoItems(toDoItemscopy);
    console.log(toDoItems);
    setInputTextField("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-teal-700 font-bold">
      <div className=" flex flex-col border-1 border-white rounded-[5px] w-[450px] h-[250px] bg-slate-600">
        <h1 className="text-center border-2 border-amber-900 bg-amber-800 p-2  ">
          To Do List
        </h1>

        <div className=" flex-1 border-2 border-slate-700 ">
          <div className="flex mt-7 flex-col justify-center items-center">
            <div className="">
              <input
                className="rounded-[3px] px-9 py-1.5 bg-slate-200"
                type="text"
                placeholder="Per Day Task"
                value={inputTextField}
                onChange={(e) => setInputTextField(e.target.value)}
              />
              <button
                className=" ml-0.5 rounded-[3px] px-3 py-1.5 text-white bg-red-900 "
                onClick={() => addToDoList()}
              >
                Done
              </button>

              {toDoItems.length > 0 ? 
              toDoItems.map((item)=>
              {
                return(
                  <div className="border-2 rounded-[3px] mt-[10px] bg-white">
                  <ul className="flex ">
                    <li>{item}</li>

                    <div className=" ml-[122px] flex mb-1">
                      <button className="border-3 border-green-700 px-1 py-0.5 mt-[3px] mr-[2px]  rounded-[3px] bg-green-700">
                        Complete
                      </button>
                      <button className="border-2 border-red-800 px-1   mt-[3px] rounded-[3px] bg-red-700">
                        Remove
                      </button>
                    </div>
                  </ul>
                </div>
                )
              })
                
              : 
                <div>No Value</div>
              }

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

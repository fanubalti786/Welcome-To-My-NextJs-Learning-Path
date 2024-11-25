"use client";
import { onchang, onchangeType } from '@/app/Types/types';
import { useState } from 'react';
import React from 'react';
import * as Yup from "yup";


const contactInfoSchema = Yup.object().shape({
  contactNum:Yup.number().required(),
  heading:Yup.string().required(),
  name:Yup.string().required().length(6)



})

export default function Form() {
  


  const [formContent,setContent] = useState<onchang>(
    
    {
        name:"",
        contactNum:"",
        heading:""
    },

 )


// let formContent:onchang = {
//       name:"",
//       contactNum:"",
//       heading:""
//   }




  const onChangeHandler = (e:any) => {

    
    const obj= {
      ...formContent,
      [e.target.name]:e.target.value
    }

    setContent(obj);

    // if(e.target.name=== "name")
    // {
    //   const newFormContent = {...formContent}
    //   newFormContent.name = e.target.value
    //   setContent(newFormContent)
      
    // }


    // if(e.target.name=== "contactNum")
    //   {
    //     const newFormContent = {...formContent}
    //     newFormContent.contactNum = e.target.value
    //     setContent(newFormContent)
        
    //   }


    //   if(e.target.name=== "heading")
    //     {
    //       const newFormContent = {...formContent}
    //       newFormContent.heading = e.target.value
    //       setContent(newFormContent)
          
    //     }


  }



    const handleSubmit = async ()=>{

      try {
        const result= await contactInfoSchema.validate(formContent)
        const requestBackend = await fetch("http://localhost:3000/api/users",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(formContent)
        })
        
      } catch (error) {
        alert(error)
      }

     
  
          // if(requestBackend.ok)
          //     {
          //         fetchData()
          //     }



    // const [name, setName] = useState("");
    // const [contact, setContact] = useState("");
    // const [heading, setHeading] = useState("");
  
  
  
    // const handleHeading = (e:any)=>{
    //   setHeading(e.target.value)
    // }
  
  
    // const handleContact = (e:any)=>{
    //   setContact(e.target.value)
    // }
  
  
    // const handleName = (e:any)=>{
    //   setName(e.target.value)
    // }
  
    // const handleSubmit = async ()=>{
    //       const userobj = {
    //           name:name,
    //           contactNum:contact,
    //           heading:heading
    //       }
  
    //       const requestBackend = await fetch("http://localhost:3000/api/users",{
    //           method:"POST",
    //           headers:{
    //               'Content-Type': 'application/json'
    //           },
    //           body:JSON.stringify(userobj)
    //       })
  
          // if(requestBackend.ok)
          //     {
          //         fetchData()
          //     }
  
          
    }


  return (
    <div>
      <div className="flex justify-center items-center ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              htmlFor="userName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              User Name
            </label>
            <input
              type="text"
              id="userName"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your user name"
              onChange={(e)=> onChangeHandler(e)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="userName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Heading
            </label>
            <input
              type="text"
              id="userName"
              name="heading"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Heading name"
              onChange={(e)=> onChangeHandler(e)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="contactNum"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNum"
              name="contactNum"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your contact number"
              onChange={(e)=> onChangeHandler(e)}
              required
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

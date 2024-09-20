"use client";
import React, { useEffect, useState } from "react";


export default function RootPage() {
  
  const [userData, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [5]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users");
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };






  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [heading, setHeading] = useState("");



  const handleHeading = (e:any)=>{
    setHeading(e.target.value)
  }


  const handleContact = (e:any)=>{
    setContact(e.target.value)
  }


  const handleName = (e:any)=>{
    setName(e.target.value)
  }

  const handleSubmit = async ()=>{
        const userobj = {
            name:name,
            contactNum:contact,
            heading:heading
        }

        const requestBackend = await fetch("http://localhost:3000/api/users",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(userobj)
        })

        if(requestBackend.ok)
            {
                fetchData()
            }

        
  }

  return (
    <div>

      {/* Form */}

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
              name="userName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your user name"
              onChange={handleName}
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
              name="userName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Heading name"
              onChange={handleHeading}
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
              onChange={handleContact}
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
      
      
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-5 text-left">Name</th>
              <th className="py-3 px-5 text-left">ContactNum</th>
              <th className="py-3 px-5 text-left">Heading</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((eachdata) => {
              return (
                <tr className="border-b">
                  <td className="py-4 px-5">{eachdata["name"]}</td>
                  <td className="py-4 px-5">{eachdata["contactNum"]}</td>
                  <td className="py-4 px-5">{eachdata["heading"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
      </div>
    </div>
  );
}

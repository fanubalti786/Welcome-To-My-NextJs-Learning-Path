"use client"
import React, { useEffect } from 'react'

export default function Table() {

    useEffect(()=>{
        fetchData()
    },[])


    const fetchData = async ()=>{
        const responce = await fetch("http://localhost:3000/api/users")
        const data = responce.json()
        console.log(data)
    }


  return (
    <div>
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
        <tr className="border-b">
          <td className="py-4 px-5">John Doe</td>
          <td className="py-4 px-5">+1234567890</td>
          <td className="py-4 px-5">Project Manager</td>
        </tr>
        <tr className="border-b bg-gray-50">
          <td className="py-4 px-5">Jane Smith</td>
          <td className="py-4 px-5">+0987654321</td>
          <td className="py-4 px-5">Developer</td>
        </tr>
        <tr>
          <td className="py-4 px-5">Alice Johnson</td>
          <td className="py-4 px-5">+1122334455</td>
          <td className="py-4 px-5">Designer</td>
        </tr>
      </tbody>
    </table>
  </div>
    </div>
  )
}

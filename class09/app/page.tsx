import Table from './component/Table/page'
import React, { useEffect, useState } from 'react'
export default function RootPate() {

  const [data,setdata] = useState([])


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
      {data.map(()=>
      {
        return     <Table/>

      })}
  
    </div>
  )
}


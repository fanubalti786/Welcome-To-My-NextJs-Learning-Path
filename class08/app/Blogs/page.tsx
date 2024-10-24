"use client"
import React, { useEffect, useState } from 'react'
import PostCards from '../Components/TopNave/PostCards/PostCards'
import Link from 'next/link'

export default function Blogs() {
 const [postData, setPostdata] = useState([])
 

    useEffect(()=>
    {

        getAllPost()

    },[])

    const getAllPost = async() =>{
        const responce = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await responce.json()
        setPostdata(data)
    }

    console.log(postData[0])

    


  return (
    <div className="flex flex-wrap justify-center ">
      {postData.map((eachPost:any) => {

        return(
          <Link href={"/Blogs/"+eachPost.id}><PostCards postData ={eachPost}/></Link>
          
        )

      }
      )}
       
    </div>
  )
}

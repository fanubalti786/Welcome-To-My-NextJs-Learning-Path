"use client"
import React, { use, useEffect, useState } from 'react'
import PostCards from '../Components/TopNave/PostCards/PostCards'

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

    console.log(postData)


  return (
    <div className="flex flex-wrap justify-center ">
      {postData.map((eachPost) => {

        return(
          <PostCards postData ={eachPost} abc = {"sdf"}/>
        )

      }
      )}
       
    </div>
  )
}

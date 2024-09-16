"use client"
import React, { useEffect } from 'react'
import PostCards from '../Components/TopNave/PostCards/PostCards'

export default function Blogs() {

    useEffect(()=>
    {

        getAllPost()

    },[])

    const getAllPost = async() =>{
        const responce = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await responce.json()
        console.log(data)
    }
  return (
    <div>
      <PostCards/> // PostCard folder
    </div>
  )
}

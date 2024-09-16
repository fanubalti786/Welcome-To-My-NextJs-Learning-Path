"use client"
import PostCards from '@/app/Components/TopNave/PostCards/PostCards'
import React, { useEffect, useState } from 'react'

export default function blogIds({params}:any) {

  const [postData, setPostData] = useState({})

  useEffect(()=> {

    getspecificpost()

  },[])

  const getspecificpost = async () => {
    const responce = await fetch(`https://jsonplace}holder.typicode.com/posts/${params.blogId}`)
    const specificData = await responce.json()
    setPostData(specificData)

  }
  console.log(postData)
  return (
    <div>
      Blog {params.blogId}
      <div>
            <div className="w-full mx-auto bg-white shadow-md rounded-lg my-4 p-6">
                {/* Post Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-4">sdf</h2>

                {/* Post Body */}
                <p className="text-gray-700 text-base mb-6">sdf</p>

              
            </div>
        </div>
     
      
    </div>
  )
}

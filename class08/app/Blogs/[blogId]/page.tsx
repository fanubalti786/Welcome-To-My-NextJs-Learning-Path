"use client"
import Comments from '@/app/Components/TopNave/Comments/page';
import PostCards from '@/app/Components/TopNave/PostCards/PostCards'
import React, { useEffect, useState } from 'react'

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function blogIds({params}:any) {

  const [postData, setPostData] = useState<Post | null>(null)
  const [comment, setComments] = useState([])

  useEffect(()=> {

    getspecificpost()

  },[])

  const getspecificpost = async () => {
    const responce = await fetch(`https://jsonplace}holder.typicode.com/posts/${params.blogId}`)
    if(responce.ok){
      const specificData = await responce.json()
      setPostData(specificData)
      console.log(specificData)
      const responseComment = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}/comments`)
      const commentsData = await responseComment.json()
      console.log("comments", commentsData)
      setComments(commentsData)
    }
    console.log(comment)
    

  }
  
  return (
    <div>
      
      <div>
      <div className="w-full mx-auto bg-white shadow-md rounded-lg my-4 p-6">
                {/* Post Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{(postData || {}).title}</h2>

                {/* Post Body */}
                <p className="text-gray-700 text-base mb-6">{(postData || {}).body}</p>

                {/* Comments Section */}
                {comment && comment.map((com) => {
                    return (
                        <Comments commentData={com} />
                    )
                })}

            </div>
        </div>
     
      
    </div>

    
  )
}

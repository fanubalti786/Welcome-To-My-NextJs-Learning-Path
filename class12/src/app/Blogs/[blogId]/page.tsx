
import Comments from '@/app/Components/TopNave/Comments/page';
import PostCards from '@/app/Components/TopNave/PostCards/PostCards'
import React, { useEffect, useState } from 'react'

// interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }


const getspecificpost = async (params:any) => {
  const responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`)
  if(responce.ok){
    const specificData = await responce.json()
    const responseComment = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}/comments`)
    const commentsData = await responseComment.json()
    return{
      specificData:specificData,
      commentsData:commentsData
    }
  }
  
  

}
export default async function blogIds({params}:any) {

 const data = await getspecificpost(params)

  
  
  return (
    <div>
            <div className="w-full mx-auto bg-white shadow-md rounded-lg my-4 p-6">
                {/* Post Title */}
                <h2 className="font-bold ">Tittle</h2>
                <h6 className="text-2xl font-bold text-gray-800 mb-4">{data?.specificData.title}</h6>

                {/* Post Body */}
                <h1 className='font-bold'>Body</h1>
                <p className="text-gray-700 text-base mb-6">{data?.commentsData.body}</p>

                {/* Comments Section */}
                {data?.commentsData.map((com:any) => {
                    return (
                        <Comments commentData={com} />
                    )
                })}

            </div>
        </div>

    
  )
}

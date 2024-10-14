
import React, { useEffect, useState } from 'react'
import PostCards from '../Components/TopNave/PostCards/PostCards'
import Link from 'next/link'



const getAllPost = async() =>{
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts")
  return responce.json()
  
}


export default async function Blogs() {

  const postData = await getAllPost()
    
   
    


  return (
    <div className="flex flex-wrap justify-center ">
      {postData.map((eachPost:any) => {

        return(
          <Link href={"/Blogs/"+eachPost.id}><PostCards postData ={eachPost} abc = {"sdf"}/></Link>
          
        )

      }
      )}
       
    </div>
  )
}

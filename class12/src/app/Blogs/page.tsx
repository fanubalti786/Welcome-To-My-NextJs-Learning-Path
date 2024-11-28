
import React, { useEffect, useState } from 'react'
import PostCards from '../Components/TopNave/PostCards/PostCards'
import Link from 'next/link'
// fetch("https://jsonplaceholder.typicode.com/posts")

// fetch('https://fakestoreapi.com/products')
// const getAllPost = async () =>{
//   const responce = await fetch("https://fakestoreapi.com/products");
//   return responce.json()
  
// }

const getAllPost = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
  } catch (error) {
    console.log(error)
  }
  
};


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

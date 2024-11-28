import React, { useEffect, useState } from 'react'
import PostCards from '../Components/TopNave/PostCards/PostCards'
import Link from 'next/link'




// fetch("https://jsonplaceholder.typicode.com/posts")
// fetch('https://fakestoreapi.com/products')

const getAllPost = async () =>{
  const responce = await fetch("https://fakestoreapi.com/products");
  return responce.json()
  
}

export default async function Blogs() {

  // const [postData,setData] = useState([])

  // useEffect(()=>
  //   {
  //     console.log("Run")
  //     getAllPost()
    
  //   },[])

  // const getAllPost = async () => {
  //   try {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const data = await response.json();
  //     console.log(data)
  //     setData(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
    
  // };

  const postData = await getAllPost()
    console.log(postData)
   
    
    // flex flex-wrap justify-center

  return (
    <div className='bg-slate-400'>
      <div className="grid grid-cols-4 gap-5 bg-slate-400 mx-7 my-3">
      {postData?.map((eachPost:any) => {

        return(
          <Link href={"/Blogs/"+eachPost.id}><PostCards postData ={eachPost} abc = {"sdf"}/></Link>
          
        )

      }
      )}
       
    </div>
    </div>
    
  )
}

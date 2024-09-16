import PostCards from '@/app/Components/TopNave/PostCards/PostCards'
import React from 'react'

export default function blogIds({params}:any) {
  return (
    <div>
      Blog {params.blogId}
      <PostCards/>
      
    </div>
  )
}

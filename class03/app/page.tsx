import Link from 'next/link'
import React from 'react'

export default function RootPage() {
  return (
    <div>
      <div>Root Page</div>
      <Link href="/Home">Home</Link><br/>
      <Link href="/Next">Next</Link><br/>
      <Link href="/About">About</Link><br/>


    </div>
  )
}

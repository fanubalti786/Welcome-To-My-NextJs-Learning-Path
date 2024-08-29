import Link from 'next/link'
import React from 'react'
export default function RootPage() {
  return (
    <div>
      <h1>Root Page</h1>
      <Link href="/About" >About</Link><br/>
      <Link href="/About" >Contact</Link><br/>
      <Link href="/About" >Home</Link><br/>
    </div>
  )
}

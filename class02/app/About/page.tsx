import Link from 'next/link'
import React from 'react'
export default function About() {
  return (
    <div>
      About Page
      <Link href="/Contact">Contact</Link><br/>
      <Link href="/Home">Home</Link><br/>
      <Link href="http://localhost:3000">Rootpage</Link> <br/>
    </div>
  )
}

import Link from 'next/link'
import React from 'react'
export default function local() {
  return (
    <div>
      Local Contact page
      <Link href="/Contact">Contact</Link><br/>
      <Link href="/About">About</Link><br/>
      <Link href="/Contact">Contact</Link><br/>
    </div>
  )
}

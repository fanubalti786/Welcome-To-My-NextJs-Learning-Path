import Link from 'next/link';
import React from 'react'

export default function Listing({params}:any) {
    console.log("parames", params.listing);
  return (
    <div>
      Listing {params.listing}
      <Link href="/property/islamabad">Islamabad</Link><br/>
      <Link href="/property/pindi">Pindi</Link><br/>
      <Link href="/property/Multan">Multan</Link><br/>
    </div>
  )
}

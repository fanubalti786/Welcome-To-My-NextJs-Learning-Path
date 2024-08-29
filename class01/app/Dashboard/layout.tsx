import React from 'react'

export default function layout({children}:any) {
  return (
    <div>
      <h1>Layout of Dashboard</h1>
      <p>{children}</p>
    </div>
  )
}

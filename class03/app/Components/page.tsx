"use client"
import React from 'react'

export default function Button() {
  return (
    <div>
      <button onClick={() => console.log("Successfull")}>Login {name}</button><br/>
    </div>
  )
}

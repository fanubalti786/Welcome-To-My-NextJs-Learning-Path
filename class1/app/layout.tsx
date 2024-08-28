import React from 'react'

export default function layout(props: any) {
  console.log("props", props);
  return (
    
      <html lang="en">
      <body>
        <h1>{props.children}</h1>
        <p>sahi kahty ho ap</p>
      </body>
    </html>
    
  )
}


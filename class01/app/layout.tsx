import React from 'react'

export default function layout(props: any) {
  console.log("props", props);
  return (
    
      <html lang="en">
      <body>
        <h1>Root Layout Page</h1>
        <h1>{props.children}</h1>
        
      </body>
    </html>
    
  )
}


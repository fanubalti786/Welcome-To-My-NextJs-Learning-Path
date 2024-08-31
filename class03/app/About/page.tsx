import React from 'react'

export default async function page() {

    const delayhomepage = new Promise((resolve,reject) => 
    {
        setTimeout(() => {
            resolve("About page render")
        }, 5000);
    })

  return await delayhomepage
}

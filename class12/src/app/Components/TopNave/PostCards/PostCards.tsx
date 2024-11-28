import React from 'react'

export default function PostCards(props:any) {
    const {postData, abc} = props
    
  return (
    <div>
      <div>
            <div className="bg-slate-200 h-[500px] p-4">
                <div>
                    {/* Post Image */}
                    <img
                        // className="w-full"
                        style={{width:100}}
                        src={postData.image}
                        alt="Post Image"
                    />

                    {/* Post Content */}
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{postData.title}</div>
                        <p className="text-gray-700 text-base">
                        {postData.description}
                        </p>
                    </div>


                </div>

            </div>

        </div>
    </div>
  )
}

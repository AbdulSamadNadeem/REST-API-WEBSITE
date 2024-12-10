import React from 'react'

const Post = () => {
  return (
    <div>
      <div className='flex flex-col gap-20'>
        <h1 className='text-center text-4xl font-light underline'>Add A Movie</h1>
         <div className='flex mt-12'>
         <h1 className='text-3xl font-light '>USE THIS :</h1>
         <p className='text-2xl font-light bg-gray-300 rounded-md'> https://mov-flix-mksf.vercel.app/api/movies/</p>
         </div>
       <div className=''>
       <h1 className='text-3xl font-light '>Example Code</h1>
       <img src="../../public/Snap-4.png" className='w-[500px] h-[500px] object-contain -mt-4' alt="" />
        </div>
       </div>
    </div>
  )
}

export default Post
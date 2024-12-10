import React from 'react'

const GetByid = () => {
  return (
    <div>
      <div className='flex flex-col gap-20'>
        <h1 className='text-center text-4xl font-light underline'>Get A Movie By ID</h1>
         <div className='flex mt-12'>
         <h1 className='text-3xl font-light '>USE THIS :</h1>
         <p className='text-2xl font-light bg-gray-300 rounded-md'> https://mov-flix-mksf.vercel.app/api/movies/:id</p>
         </div>
       <div className=''>
       <h1 className='text-3xl font-light '>Example Code</h1>
       <img src="/assets/Snap-3.png" className='w-[500px] h-[500px] object-contain -mt-10' alt="" />
        </div>
       </div>
    </div>
  )
}

export default GetByid
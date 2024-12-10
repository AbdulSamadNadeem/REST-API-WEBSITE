import React from 'react'
import { useNavigate } from 'react-router'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='flex items-center justify-center gap-32 w-[700px] mx-auto mt-6'>
        <div>
            <img onClick={()=>navigate('/')} src="/assets/watching-tv.png" alt="" className='w-20 h-20 object-contain' />
        </div>
        <div>
            <ul className='flex items-center gap-10 cursor-pointer'>
                <li  onClick={()=>navigate('/')} className='text-xl font-light '>Home</li>
                <li  onClick={()=>navigate('/home')} className='text-xl font-light '>Docs</li>
            </ul>
        </div>
    </div>
  )
}

export default Header
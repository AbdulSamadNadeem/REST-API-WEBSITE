import React from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { TbHttpGet ,TbHttpPost ,TbHttpPatch ,TbHttpDelete  } from "react-icons/tb";

const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className='flex h-screen'>
        <div className='w-80 h-screen border '>
            <div>
                <h1 onClick={()=>navigate('/')} className='text-3xl font-semibold text-center cursor-pointer'>FETCH REST API</h1>
            </div>
            <hr />
           <div className='mt-28'>
            <h1 className='text-4xl font-light text-center'>HTTP METHODS</h1>
               <ul className={'flex flex-col gap-20 text-2xl font-light text-center mt-10'}>
                 <NavLink className='flex flex-row items-center justify-center gap-7' to={'/docs/getall'}>Get All Movies<span><TbHttpGet className='bg-blue-300 text-2xl'/></span></NavLink>
                 <NavLink className='flex flex-row items-center justify-center gap-3' to='/docs/getbyid'>Get Movie by Id <span><TbHttpGet className='bg-blue-300 text-2xl'/></span></NavLink>
                 <NavLink className='flex flex-row items-center justify-center gap-10' to='/docs/addmovie'>Add A Movie <span><TbHttpPost className='bg-blue-300 text-2xl'/></span></NavLink>
                 <NavLink className='flex flex-row items-center justify-center gap-3' to='/docs/updatemovie'>Update A Movie<span><TbHttpPatch className='bg-blue-300 text-2xl'/></span></NavLink>
                 <NavLink className='flex flex-row items-center justify-center gap-6'to='/docs/deletemovie'>Delete A Movie <span><TbHttpDelete className='bg-blue-300 text-2xl'/></span></NavLink>
                 <NavLink className='flex flex-row items-center justify-center gap-6'to='/docs/ids'>Id's List</NavLink>
               </ul>
           </div>
        </div>
        <div className='flex-1 p-4'>
            <Outlet/>
        </div>
    </div>
    </>
  )
}

export default Sidebar
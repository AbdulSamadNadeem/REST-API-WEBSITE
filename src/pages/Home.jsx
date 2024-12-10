import React from 'react'
import Header from '../components/Header/Header'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
        <div>
    <Header/>
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col gap-8'>
      <h1 className='text-6xl font-bold  '>
        FETCH REST API
      </h1>
      <p className='text-2xl font-thin '>
       FETCH REST API FOR YOUR PROJECTS AND PRACTICE..
      </p>
      <button onClick={()=>navigate('/home')} className='bg-black text-white brightness-100 w-52 h-12 rounded-sm hover:scale-105 duration-300'>
               READ DOCS
      </button>
      </div>
      <div>
        <img src="./watching-tv.png" alt="" />
      </div>
    </div>
  
      </div>
      </div>
  )
}

export default Home
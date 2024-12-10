import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Docs from './pages/Docs'
import GetAll from './pages/GetAll'
import GetByid from './pages/GetByid'
import Post from './pages/Post'
import Patch from './pages/Patch'
import Delete from './pages/Delete'
import Sidebar from './components/Sidebar/Sidebar'
import Idlist from './pages/Idlist'

const App = () => {
  return (
    <div>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Docs/>}/>
          <Route path='/docs' element={<Sidebar/>}>
               <Route path='/docs/getall' element={<GetAll/>}/>
               <Route path='/docs/getbyid' element={<GetByid/>}/>
               <Route path='/docs/addmovie' element={<Post/>}/>
               <Route path='/docs/updatemovie' element={<Patch/>}/>
               <Route path='/docs/deletemovie' element={<Delete/>}/>
               <Route path='/docs/ids' element={<Idlist/>}/>
          </Route>
       </Routes>
    </div>
  )
}

export default App
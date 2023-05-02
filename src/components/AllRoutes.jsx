import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Registration from './Registration'
import Login from './Login'
import ViewPost from './ViewPost'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/showpost" element={<ViewPost/>}/>
    </Routes>
  )
}

export default AllRoutes

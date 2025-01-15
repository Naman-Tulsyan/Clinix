import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className=' w-[1100px] mx-auto my-5'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout;

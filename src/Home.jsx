import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'
import SongComponent from './SongComponent'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
        <Navbar/>
        <div className='flex gap-2'>
          <SideBar/>
          <Outlet/>
        </div>
    </>
  )
}

export default Home
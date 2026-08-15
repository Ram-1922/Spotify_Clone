import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'
import SongComponent from './SongComponent'

function Home() {
  return (
    <>
        <Navbar/>
        <div className='flex gap-2'>
          <SideBar/>
          <SongComponent/>
        </div>
    </>
  )
}

export default Home
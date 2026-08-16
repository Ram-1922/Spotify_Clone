import { Maximize2, Menu, PanelRightOpen, Plus,Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function SideBar() {
  return (
    <div className='bg-[#121212] rounded-lg m-3 mt-1 text-white p-5 w-140 h-[calc(100vh-10rem)]'>
        <div className='flex justify-between'>
            <div className='flex gap-4 items-center group transition-all'>
                <PanelRightOpen className='translate-x-[-60px] text-[gray] hidden opacity-0  group-hover:block group-hover:translate-x-0 group-hover:opacity-100 transition-all hover:text-white transition-transform duration-500'/>
                <h3 className='font-bold'>Your Library</h3>
            </div>
            <div className='flex gap-x-5'>
                <button className='flex gap-2 w-26 text-sm font-medium h-8 items-center bg-[#232323] p-2 rounded-full -mt-1 hover:bg-[#2a2a2a] transition'><span><Plus size={22}/></span>Create</button>
                <button className='flex  text-sm font-medium h-8 items-center bg-[#232323] p-2 rounded-full -mt-1 hover:bg-[#2a2a2a] group'><Maximize2 size={17} className='text-[#b3b3b3] group-hover:text-white transition'/></button>
            </div>
        </div>
        <div className='flex gap-x-3 mt-6 font-medium'>
            <button className='bg-[#232323] p-1 px-4 rounded-full hover:bg-[#2a2a2a] transition'>Playlists</button>
            <button className='bg-[#232323] p-1 px-4 rounded-full hover:bg-[#2a2a2a] transition'>Artists</button>
        </div>
        <div className='flex items-center  justify-between mt-6 gap-4'>
            <div className='flex items-center gap-x-2 hover:bg-[#232323] p-1 rounded-lg'>
                <Search size={20} color='gray'/>
                <input type="text" placeholder='Search in your library ' className='border-none outline-none p-1'/>
            </div>
            <div className='flex gap-3 text-[gray] hover:text-white/80 hover:scale-103 transition'>
                <p >Recents</p>
                <Menu className='mt-[1px]'/>
            </div>
        </div>
    </div> 
  )
}

export default SideBar
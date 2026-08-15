import React from 'react'
import Playlist_home from './Playlist_home'

function SongComponent() {
  return (
    <div className='w-full m-3 -ml-1 p-5 rounded-lg bg-[#121212] text-white flex flex-col gap-y-6'>
        <div className='flex gap-4'>
            <button className=' px-4 py-2 bg-[#232323] hover:bg-[#2a2a2a] rounded-full active:bg-white active:text-[#2a2a2a]' >All</button>
            <button className=' px-4 py-2 bg-[#232323] hover:bg-[#2a2a2a] rounded-full active:bg-white active:text-[#2a2a2a]' >Music</button>
            <button className=' px-4 py-2 bg-[#232323] hover:bg-[#2a2a2a] rounded-full active:bg-white active:text-[#2a2a2a]' >Podcasts</button>
        </div>
        <div className='p-5 '>
            <h3 className='text-sm text-[gray]'>Made For</h3>
            <h3 className='text-2xl font-bold tracking-wider'>Spidey</h3>
            <div className='flex overflow-visible gap-5 gap-x-1 p-3 -ml-8 '>
                <Playlist_home/>
            </div>
        </div>
    </div>
  )
}

export default SongComponent
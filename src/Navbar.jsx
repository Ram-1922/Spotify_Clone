import React, { useEffect, useRef } from 'react'
import graylogo from "./assets/spotify_logo_gray.png"
import home from "./assets/home.png"
import search from "./assets/search.png"
import { House, Search, Dock, CircleArrowDown } from 'lucide-react';
import {Link}  from 'react-router-dom';

function Navbar() {

  const refsearch = useRef(null);

  useEffect(()=>{
    const handlekeydown=(event)=>{
      if((event.ctrlKey || event.metaKey) && event.shiftKey && event.key?.toLowerCase()==='l'){
        event.preventDefault();
        refsearch.current.focus();
      }
    }
    window.addEventListener('keydown',handlekeydown);

    return ()=>{
      window.removeEventListener('keydown',handlekeydown);
    }
  },[]);

  return (
    <>
        <nav className="flex w-full bg-black text-white px-6 py-3 justify-between ">
            <div className="h-8 w-8 mt-2"><img src={graylogo}/></div>
            <div className='flex items-center gap-2 ml-130 -my-2'>
              <button className='bg-[#1f1f1f] hover:bg-[#2a2a2a] hover:scale-105 rounded-full w-13 h-13 pl-3'>
                <House size={27} />
              </button>
              <div className='bg-[#1f1f1f] px-3 h-13 flex items-center rounded-full  w-125 border border-black mr-2 gap-2 hover:border-[#333] hover:bg-[#2a2a2a] transition-all group  focus-within:border-white focus-within:border-2 ease-in-out'>
                <Search size={35} className='text-[#b3b3b3] group-hover:text-white'/>
                <input ref={refsearch} className='border-none bg-transparent outline-none w-full px-3 text-white placeholder-[#b3b3b3] ' type='text' placeholder='What do you want to play?'/>
                <div className='group flex gap-2 mr-3 opacity-0 group-hover:opacity-80'>
                  <span className='text-[#b3b3b3] border p-[3px] text-xs rounded-md'>Ctrl</span>
                  <span className='text-[#b3b3b3] border p-[3px] text-xs rounded-md'>Shift</span>
                  <span className='text-[#b3b3b3] border p-[3px] text-xs rounded-md'>L</span>
                </div>
                <div className='w-[1px] h-6 bg-[#b3b3b3] mr-2'></div>
                <Dock size={30}  className='text-[#b3b3b3] hover:text-white hover:scale-103 transition '/>
              </div>
            </div>
            <div className='flex items-center gap-4'> 
              <div className='font-bold flex gap-2 '>
                <Link to='/' className='text-[#b3b3b3] hover:text-white hover:scale-103 transition '>Premium</Link>
                <Link to='/' className='text-[#b3b3b3] hover:text-white hover:scale-103 transition '>Support</Link>
                <Link to='/' className='text-[#b3b3b3] hover:text-white hover:scale-103 transition '>Download</Link>
              </div>
              <div className='w-[1px] h-3 bg-white'></div>
              <div className='flex items-center gap-1 text-[#b3b3b3] hover:text-white hover:scale-103 transition'>
                <CircleArrowDown size={20} className=''/>
                <Link to='/' >Install App</Link>
              </div>
              <Link to='/' className='text-[#b3b3b3] hover:text-white hover:scale-103 transition mr-1'>SignUp</Link>
              <button className='bg-white text-black font-bold h-12 -m-2  w-28 rounded-full hover:opacity-95 hover:scale-105 cursor-pointer'>Log in</button>
            </div>
        </nav>
    </>
  )
}

export default Navbar
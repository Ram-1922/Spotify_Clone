import React, { useEffect, useRef, useState } from 'react'
import graylogo from "./assets/spotify_logo_gray.png"
import home from "./assets/home.png"
import search from "./assets/search.png"
import { House, Search, Dock, CircleArrowDown, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {

  const [logged_in, setLogged_in] = useState(false);
  const refsearch = useRef(null);
  const [profile_menu,setProfile_menu]=useState(false);
  const refClickOut=useRef(null);
  
  useEffect(() => {
    const handlekeydown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key?.toLowerCase() === 'l') {
        event.preventDefault();
        refsearch.current.focus();
      }
    }

    const handleClickOutside = (event)=>{
      if(refClickOut.current && !refClickOut.current.contains(event.target)){
        setProfile_menu(false);
        console.log(logged_in)
      }
    }
    
    window.addEventListener('keydown', handlekeydown);
    window.addEventListener('mousedown',handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handlekeydown);
      window.removeEventListener('mousedown',handleClickOutside);
    }
  }, []);

  return (
    <>
      <nav ref={refClickOut} className="flex w-full bg-black text-white px-6 py-3 justify-between ">
        <div className="h-8 w-8 mt-2"><img src={graylogo} /></div>
        <div className='flex items-center gap-2 -my-2'>
          <button className='bg-[#1f1f1f] hover:bg-[#2a2a2a] hover:scale-105 rounded-full w-13 h-13 pl-[13px]'>
            {/* <House size={26} className='active:fill-white'/> */}
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-white"
              aria-hidden="true"
            >
              <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732z" />
            </svg>
          </button>
          <div className='bg-[#1f1f1f] px-3 h-12 flex items-center rounded-full  w-125 border border-black mr-2 gap-2 hover:border-[#333] hover:bg-[#2a2a2a] transition-all group  focus-within:border-white focus-within:border-2 ease-in-out'>
            <Search size={35} className='text-[#b3b3b3] group-hover:text-white' />
            <input ref={refsearch} className='border-none bg-transparent outline-none w-full px-3 text-white placeholder-[#b3b3b3] ' type='text' placeholder='What do you want to play?' />
            <div className='group flex gap-2 mr-3 opacity-0 group-hover:opacity-80'>
              <span className='text-[#b3b3b3] border p-[3px] text-xs rounded-md'>Ctrl</span>
              <span className='text-[#b3b3b3] border p-[3px] text-xs rounded-md'>Shift</span>
              <span className='text-[#b3b3b3] border p-[3px] text-xs rounded-md'>L</span>
            </div>
            <div className='w-[1px] h-6 bg-[#b3b3b3] mr-2'></div>
            {/* <Dock size={32} className='text-[#b3b3b3] mr-1 hover:text-white hover:scale-103 transition ' /> */}
            <button>
              <svg
                viewBox="0 0 24 24"
                className="w-10 h-6 fill-gray-400 hover:fill-white transition"
                aria-hidden="true"
              >
                <path d="M15 15.5c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2" />
                <path d="M1.513 9.37A1 1 0 0 1 2.291 9h19.418a1 1 0 0 1 .979 1.208l-2.339 11a1 1 0 0 1-.978.792H4.63a1 1 0 0 1-.978-.792l-2.339-11a1 1 0 0 1 .201-.837zM3.525 11l1.913 9h13.123l1.913-9zM4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h-2V3H6v3H4z" />
              </svg>
            </button>
          </div>
        </div>
        {!logged_in && <div className='flex items-center gap-4'>
          <div className='font-bold flex gap-2 '>
            <Link to='/' className='text-[#b3b3b3] hover:text-white hover:scale-103 transition '>Premium</Link>
            <Link to='/' className='text-[#b3b3b3] hover:text-white hover:scale-103 transition '>Support</Link>
            <Link to='/' className='text-[#b3b3b3] hover:text-white hover:scale-103 transition '>Download</Link>
          </div>
          <div className='w-[1px] h-3 bg-white'></div>
          <div className='flex items-center gap-1 text-[#b3b3b3] hover:text-white hover:scale-103 transition'>
            <CircleArrowDown size={20} className='' />
            <Link to='/' >Install App</Link>
          </div>
          <Link to='/' className='text-[#b3b3b3] hover:text-white hover:scale-103 transition mr-1'>SignUp</Link>
          <button onClick={()=>setLogged_in(true)} className='bg-white text-black font-bold h-10 -m-2  w-25 rounded-full hover:opacity-95 hover:scale-105 cursor-pointer'>Log in</button>
        </div>}

        {logged_in && <div className='flex items-center gap-9'>
          <button className='bg-white text-black text-sm font-bold h-8 -m-2  w-35 rounded-full hover:opacity-95 hover:scale-105 cursor-pointer'>Explore Premium</button>
          <div className='flex items-center gap-1 text-[#b3b3b3] hover:text-white hover:scale-103 transition'>
            <CircleArrowDown size={20} className='' />
            <Link to='/' >Install App</Link>
          </div>
          <div className='flex items-center gap-5'>
            <button className='group transition-all'>
              <span className='text-xs  bg-[#2a2a2a] p-2 rounded-lg font-medium absolute top-14 right-20 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-600 ease-in-out'>What's new</span>
              <svg
                viewBox="0 0 16 16"
                className="w-4 h-4 fill-gray-400 group-hover:fill-white"
                aria-hidden="true"
              >
                <path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4m-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569zm4.5 8a1 1 0 1 0 2 0z" />
              </svg>
            </button>
            <button className='group transition-all'>
              <span className='text-xs  bg-[#2a2a2a] p-2 rounded-lg font-medium absolute top-14 right-8 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-600 ease-in-out'>Listening Activity</span>
              <svg
                viewBox="0 0 16 16"
                className="w-4 h-4 fill-gray-400 group-hover:fill-white"
                aria-hidden="true"
              >
                <path d="M3.849 10.034c-.021-.465.026-.93.139-1.381H1.669c.143-.303.375-.556.665-.724l.922-.532a1.63 1.63 0 0 0 .436-2.458 1.8 1.8 0 0 1-.474-1.081q-.014-.287.057-.563a1.12 1.12 0 0 1 .627-.7 1.2 1.2 0 0 1 .944 0q.225.1.392.281c.108.12.188.263.237.417q.074.276.057.561a1.8 1.8 0 0 1-.475 1.084 1.6 1.6 0 0 0-.124 1.9c.36-.388.792-.702 1.272-.927v-.015c.48-.546.768-1.233.821-1.958a3.2 3.2 0 0 0-.135-1.132 2.657 2.657 0 0 0-5.04 0c-.111.367-.157.75-.135 1.133.053.724.341 1.41.821 1.955A.13.13 0 0 1 2.565 6a.13.13 0 0 1-.063.091l-.922.532A3.2 3.2 0 0 0-.004 9.396v.75h3.866c.001-.033-.01-.071-.013-.112m10.568-3.4-.922-.532a.13.13 0 0 1-.064-.091.12.12 0 0 1 .028-.1c.48-.546.768-1.233.821-1.958a3.3 3.3 0 0 0-.135-1.135A2.64 2.64 0 0 0 12.7 1.233a2.67 2.67 0 0 0-3.042.64 2.65 2.65 0 0 0-.554.948c-.11.367-.156.75-.134 1.133.053.724.341 1.41.821 1.955.005.006 0 .011 0 .018.48.225.911.54 1.272.927a1.6 1.6 0 0 0-.125-1.907 1.8 1.8 0 0 1-.474-1.081q-.015-.287.057-.563a1.12 1.12 0 0 1 .627-.7 1.2 1.2 0 0 1 .944 0q.225.1.392.281.162.182.236.413c.05.184.07.375.058.565a1.8 1.8 0 0 1-.475 1.084 1.633 1.633 0 0 0 .438 2.456l.922.532c.29.169.52.421.664.724h-2.319c.113.452.16.918.139 1.383 0 .04-.013.078-.017.117h3.866v-.75a3.2 3.2 0 0 0-1.58-2.778v.004zm-3.625 6-.922-.532a.13.13 0 0 1-.061-.144.1.1 0 0 1 .025-.047 3.33 3.33 0 0 0 .821-1.958 3.2 3.2 0 0 0-.135-1.132 2.657 2.657 0 0 0-5.041 0c-.11.367-.156.75-.134 1.133.053.724.341 1.41.821 1.955a.13.13 0 0 1 .028.106.13.13 0 0 1-.063.091l-.922.532a3.2 3.2 0 0 0-1.584 2.773v.75h8.75v-.75a3.2 3.2 0 0 0-1.583-2.781zm-5.5 2.023c.143-.303.375-.556.665-.724l.922-.532a1.63 1.63 0 0 0 .436-2.458 1.8 1.8 0 0 1-.474-1.081q-.015-.287.057-.563a1.12 1.12 0 0 1 .627-.7 1.2 1.2 0 0 1 .944 0q.225.1.392.281c.108.12.188.263.237.417q.073.276.057.561a1.8 1.8 0 0 1-.475 1.084 1.632 1.632 0 0 0 .438 2.456l.922.532c.29.169.52.421.664.724z"/>
              </svg>
            </button>
            <button onClick={()=>setProfile_menu(!profile_menu)} className='bg-[#b49bc8] h-[28px] w-[30px]  rounded-full shadow-[1px_3px_20px_2px_gray] hover:shadow-[1px_3px_20px_3px_gray] hover:scale-105 cursor-pointer transition ease-in-out duration-500 group'>
              {!profile_menu && <span className=' text-xs  bg-[#2a2a2a] p-2 rounded-lg font-medium absolute top-9 -right-3 z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-600 ease-in-out'>Spidey</span>}
              <span className=' font-bold text-2 text-black'>S</span>
            </button>
              {profile_menu && <div className='bg-[#282828] h-125 w-85 rounded-lg absolute right-3 top-15 z-20'>
                <ul className='grid grid-cols-1 p-1 my-2'>
                  <li className='text-sm h-10 flex pl-5 items-center rounded-xs font-medium hover:bg-[#3e3e3e]'>Account</li>
                  <li className='text-sm h-10 flex pl-5 items-center rounded-xs font-medium hover:bg-[#3e3e3e]'>Profile</li>
                  <li className='text-sm h-10 flex pl-5 items-center rounded-xs font-medium hover:bg-[#3e3e3e]'>Recents</li>
                  <li className='text-sm h-10 flex pl-5 items-center rounded-xs font-medium hover:bg-[#3e3e3e]'>Upgrade to Premium</li>
                  <li className='text-sm h-10 flex pl-5 items-center rounded-xs font-medium hover:bg-[#3e3e3e]'>Support</li>
                  <li className='text-sm h-10 flex pl-5 items-center rounded-xs font-medium hover:bg-[#3e3e3e]'>Download</li>
                  <li className='text-sm h-10 flex pl-5 items-center rounded-xs font-medium hover:bg-[#3e3e3e]'>Settings</li>
                  <li className='text-sm h-10 flex pl-5 items-center rounded-xs font-medium hover:bg-[#3e3e3e]' onClick={()=>setLogged_in(false)}>Log out</li>
                  <div className='w-75 ml-2 mt-2 bg-[#3e3e3e] h-[2px]'></div>
                  <li className='flex pl-4 pt-1 text-base font-medium'>Your Updates</li>
                  <div className='flex flex-col gap-y-1 justify-center items-center p-2'>
                    <Check size={35}/>
                    <h3 >You're all caught up</h3>
                    <p className='text-sm text-[#b3b3b3]'>Watch this space for news on your followers, playlists, events and more.</p>
                  </div>
                </ul>
              </div>}
          </div>
        </div>}

      </nav>
    </>
  )
}

export default Navbar
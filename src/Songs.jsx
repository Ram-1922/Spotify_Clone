import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import {CircleArrowDown, CirclePlus, Clock3, Ellipsis, Menu, Play, Shuffle} from 'lucide-react'

function Songs() {
    const{songs}=useFetch("http://localhost:3000/songs");
    const[album_songs,setAlbum_songs]=useState([]);
    const {id}=useParams();
    const [album_info,setAlbum_info] = useState();

    function format_time(ms){
        const total_seconds=Math.floor(ms/1000);
        const minutes=Math.floor(total_seconds/60);
        const seconds=Math.floor(total_seconds%60);
        const duration=`${minutes}:${String(seconds).padStart(2,"0")}`;
        return duration
    }
    

    useEffect(()=>{
        const album=songs.filter(song=>song.album_name === id);
        setAlbum_songs(album);
        setAlbum_info(songs.find((song)=>song.album_name ===id));
    },[songs])


  return (
        <div className='w-full m-3 mt-1 -ml-1 rounded-lg bg-[#121212] text-white flex flex-col h-[calc(100vh-10rem)] overflow-y-auto scrollbar-none  scroll-smooth relative'>
            <div className='absolute top-0 left-0 w-full bg-gradient-to-b from-[#359da5] via-[#359da5]/50 to-[#359da5]/0 h-126 flex flex-row z-0'>
                <img src={album_info?.artwork_url} className='h-65 w-65 m-7 ml-5 p-1 rounded-xl'/>
                <div className='p-8 pl-0 -ml-2 flex flex-col gap-y-2'>
                    <p className='mt-5 text-sm font-medium'>Public Playlist</p>
                    <h1 className='text-6xl font-extrabold py-3 -mt-4'>{album_info?.album_name}</h1>
                    <h3 className='text-[skyblue] font-medium'>{album_info?.artist_name}</h3>
                    <h3 className='text-[lightgray] font-bold text-sm'>• 50 songs, about 3 hr 30 min</h3>
                    <h3 className='text-[lightgray] font-medium text-sm'>About recommendations and the impact of promotion</h3>
                </div>
            </div>
            <div  className='absolute pt-8 pb-30 w-full  top-80 bg-gradient-to-b from-[#121212]/25 to-[#121212] p-5 flex flex-col gap-y-5'>
                <div className="flex flex-row justify-between">
                    <div className='flex flex-row items-center gap-7'>
                        <button className='p-4 bg-[#3be377] rounded-full hover:scale-105 hover:bg-[#42ff91] transition-all duration-200 cursor-pointer'><Play size={22} className='text-black fill-black '/></button>
                        <Shuffle size={30} className='text-[gray] hover:text-white transition duration-200'/>
                        <CirclePlus size={30} className='text-[gray] hover:text-white transition duration-200'/>
                        <CircleArrowDown size={30} className='text-[gray] hover:text-white transition duration-200'/>
                        <Ellipsis size={30} className='text-[gray] hover:text-white transition duration-200'/></div>
                        <div className='flex gap-3 text-md text-[gray] hover:text-white transition duration-200 mt-1'><span>List</span><Menu size={22}/>
                    </div>
                </div>
                <div className='flex p-5 pb-0 -mb-3 justify-between text-[lightgray]/90 text-md font-light'>
                    <h3 className='flex gap-x-8'><span>#</span>Title</h3>
                    <h3>Album</h3>
                    <Clock3 className='mr-2' size={18}/>
                </div>
                <div className='w-full h-[1px] bg-[lightgray]/10'></div>
                {album_songs && album_songs.map((song,index)=>(
                    <div className='flex  pl-5 items-center gap-x-10 group transition-all hover:bg-[#2a2a2a] p-2 rounded-lg -mb-4' >
                        <div className='flex items-center gap-8 w-160 relative'>
                            <span className=' hidden group-hover:block w-[5.3px]'><Play className='fill-white' size={15}/></span>
                            <span className='text-[lightgray]/80 font-light text-sm group-hover:hidden'>{index+1}</span>
                            <img src={song?.artwork_url} className='w-12 h-12 rounded-lg '/>
                            <div className='-ml-4 absolute left-30'>
                                <h3 className="text-md font-medium">{song.track_name}</h3>
                                <p className='text-[lightgray]/80 text-sm font-medium'>{song.artist_name}</p>
                            </div>
                        </div>
                        <div className="flex w-144">
                            <h3 className='text-sm text-[lightgray]/80 font-medium'>{song.album_name}</h3>
                        </div>
                        <div className="flex items-center gap-8 text-[lightgray]/80 font-medium text-sm" >
                            <CirclePlus className='hidden group-hover:block absolute right-35' size={15}/>
                            <span className='absolute'>{format_time(song.duration_ms)}</span>
                            <Ellipsis className='hidden group-hover:block absolute right-12'/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Songs
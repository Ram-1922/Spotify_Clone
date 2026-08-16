import { Play } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

function Playlist_home() {
    
    const navigate=useNavigate();
    const {songs} = useFetch("http://localhost:3000/songs");
    
    const [albums,setAlbums]=useState([]);

    useEffect(()=>{
        if(songs && songs.length>0){
            const uniquevalues = Object.values(songs.reduce((acc,song)=>{
                if(!acc[song.album_name]){
                    acc[song.album_name]={
                        id:crypto.randomUUID(),
                        name:song.album_name,
                        image:song.artwork_url,
                        artist:song.artist_name
                    }
                }
                return acc;
            },{}));
            setAlbums(uniquevalues);
        }
    },[songs])

    return (
        <>
            {albums && albums.map(song=>(
                <div key={song.id} onClick={()=>navigate('/songs/'+ song.name)} className='flex flex-col flex-wrap group gap-y-5 items-center cursor-pointer hover:bg-gray-400/10 p-3 pt-4 rounded-lg text-white transition duration-800 relative group transition-all '>
                    <img className=" w-40 rounded-2xl" src={song.image}/>
                    <button  className='p-[14px] bg-[#3be377] rounded-full absolute top-30 right-7 hover:scale-105 hover:bg-[#42ff91] translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500'><Play size={18} className='text-black fill-black '/></button>
                    <h1 className='text-[gray] font-medium w-40'>{song.name}</h1>
                </div>
             ))}
        </>
    )
}

export default Playlist_home
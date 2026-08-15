import { Play } from 'lucide-react';
import React, { useEffect, useState } from 'react'

function Playlist_home() {
    const [songs,setSongs]=useState([]);
    const [albums,setAlbums]=useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:3000/songs").then(response=>response.json()).then(data=>{setSongs(data)
            const uniquevalues = Object.values(data.reduce((acc,song)=>{
            if(!acc[song.album_name]){
                acc[song.album_name]={
                    name:song.album_name,
                    image:song.artwork_url,
                    artist:song.artist_name
                }
            }
            return acc;
        },{}))
        setAlbums(uniquevalues);
    }).catch(err=>console.log(err));
    },[])

    useEffect(()=>{
        console.log(albums);
    },[songs])
    
    return (
        <>
            {albums && albums.map(song=>(
                <div className='flex flex-col flex-wrap gap-y-5 items-center hover:bg-gray-400/10 p-2 rounded-lg text-white transition duration-800 relative group transition-all '>
                    <img className=" w-45 rounded-2xl" src={song.image}/>
                    <button className='p-4 bg-[#3be377] rounded-full absolute top-32 right-7 hover:scale-105 hover:bg-[#42ff91] translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500'><Play size={18} className='text-black fill-black '/></button>
                    <h1 className='text-[gray] w-50'>{song.name}</h1>
                </div>
             ))}
        </>
    )
}

export default Playlist_home
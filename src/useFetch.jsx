
import React, { useEffect, useState } from 'react'

function useFetch(url) {
    const [songs,setSongs]=useState([]);
    
    
    useEffect(()=>{
        fetch(url).then(response=>response.json()).then(data=>{setSongs(data)}).catch(err=>console.log(err));
    },[])
  return {songs}
}

export default useFetch
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location';


export const useGetCurrentLocation = () => {
    const [location,setLocation] = useState(null);
    const [errorMsg,setErrorMsg] = useState(null);

    useEffect(()=>{
        
    },[])
  return (
    <div>useGetCurrentLocation</div>
  )
}

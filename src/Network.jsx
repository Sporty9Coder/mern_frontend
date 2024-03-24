import React, { useEffect, useState } from 'react'


export default function NetworkStatus() {
    const [isOnline,setIsOnline]=useState(true);
    useEffect(()=>{
        function handleOnline()
        {
            setIsOnline(true);
        }

        function handleOffline()
        {
            setIsOnline(false);
        }

        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);

        return(()=>{
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        })
    },[])
  return (
    <div>
      <h1>{isOnline?"✔️Online":"❌Disconnected"}</h1>
    </div>
  )
}

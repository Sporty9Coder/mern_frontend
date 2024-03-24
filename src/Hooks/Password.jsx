import React, { useEffect, useRef, useState } from 'react'

export default function Password() {
    // const [pwd,setpwd]=useState("assfewqdvf");
    const [count,setcount]=useState(0);
    const [lengAry,setlengAry]=useState([0]);
    const refpwd=useRef();

    useEffect(()=>{
        // console.log(pwd.length);
        console.log("Ary");
        console.log(lengAry);
        console.log("last value");
        console.log(lengAry[(lengAry.length)-1]);
        console.log("second last value");
        console.log(lengAry[(lengAry.length)-2]);
        if((lengAry.length>1)&&(lengAry[(lengAry.length)-1]>lengAry[(lengAry.length)-2]))
        {
            setcount(count+1);
        }
        if((lengAry.length>1)&&(lengAry[(lengAry.length)-1]<lengAry[(lengAry.length)-2]))
        {
            setcount(count-1);
        }
    },[lengAry.length])

  return (
    <div>
      Enter Password:
      <input type="text" onChange={(objkuch)=>{
        // console.log(objkuch.target.value.length);
        return( 
            setlengAry([...lengAry,objkuch.target.value.length])
        )
        }} ref={refpwd}/>
      Length{count}
    </div>
  )
}

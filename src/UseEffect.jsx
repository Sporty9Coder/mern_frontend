import React,{useEffect,useState} from 'react'

export default function UseEffect() {

    const [fn,setFn]=useState("first");
    const [ln,setLn]=useState("last");
    const [full,setFull]=useState("fullname");

    
    //executes on every render (always useEffect(sideEffect))
    /*useEffect(()=>{
        console.log("side effect");
    })*/
    
    //executes only once after the initial render (initial/one time useEffect(sideEffect))
    /*useEffect(()=>{
        console.log("side effect");
    },[])*/
    
    //executes only for fn (filtered/occasional useEffect(sideEffect))
    useEffect(()=>{
        console.log("side effect");
    },[fn])
    
    console.log("component rendered");// useEffect executes only after the re rendering occurs 
  return (
    <div>
      <div>
        F.Name:<input type="text" onChange={(event)=>{setFn(event.target.value)}}/>{fn}
      </div>
      <div>
        L.Name:<input type="text" onChange={(event)=>{setLn(event.target.value)}}/>{ln}
      </div>
      <div>
        <input type="button" value="Get FullName" onClick={()=>{setFull(fn+" "+ln)}}/>
        Full Name:<input type="text" value={full} readOnly></input>
      </div>
    </div>
  )
}

import React,{useState} from "react";

export default function Fullname() {

    const [fn,setFn]=useState("first");
    const [ln,setLn]=useState("last");
    const [FullName,joinNamesfx]=useState("");

    function updateLastname(event)
    {
        console.log(event);
        console.log(event.target);
        setLn(event.target.value);
    }

    const getFullname=()=>
    {
        console.log(FullName);
        joinNamesfx(fn+" "+ln);
    }

  return (
    <>
        <div>
            First Name: <input type="text" onChange={(event)=>setFn(event.target.value)}/>{fn}
        </div>
        <br />
        <div>
            Last Name: <input type="text" onChange={updateLastname}/>{ln}
        </div>
        <br />
        <input type="button" value="Get Full Name" onClick={getFullname}/>
        <br /><br />
        <div>
            Full Name: <input type="text" value={FullName} readOnly/>
        </div>
    </>
  )
}

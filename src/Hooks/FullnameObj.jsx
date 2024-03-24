import React, { useState } from 'react'

export default function FullnameObj() {

    const [obj,setObj]=useState({
        fn:"first",
        ln:"last",
        full:"fullname",
    })

    const doUpdatename=(event)=>
    {
        const {name,value}=event.target;
        console.log(name);
        setObj({...obj,[name]:value})
    }

    const dojoin=()=>
    {
        setObj({...obj,["full"]:obj.fn+" "+obj.ln})
    }

  return (
    <>
        <div>
            F.name: <input type="text" name="fn" onChange={doUpdatename}/>{obj.fn}
        </div>
        <div>
            L.name: <input type="text" name='ln' onChange={doUpdatename}/>{obj.ln}
        </div>
        <input type="button" value="Get Fullname" onClick={dojoin}/>
        <br />
        <div>
            Full name: <input type="text" value={obj.full} readOnly />
            <br />
            {JSON.stringify(obj)}
        </div>
    </>
  )
}

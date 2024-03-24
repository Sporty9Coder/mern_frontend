import React, { useContext } from 'react'
import { contextJson } from './Home'

export default function Listitems() {
    const productlist=useContext(contextJson);
    function genlist(obj)
    {
        return (
            <div style={{border:"1px black solid",width:"200px",marginLeft:"10px",textAlign:"center"}}>
                <p>{obj.company}</p>
                <p>{obj.price}</p>
                <p>{obj.model}</p>
                <hr />
            </div>
        )
    }
  return (
    <div style={{display:"flex"}}>
      {
        productlist.map(genlist)
      }
    </div>
  )
}

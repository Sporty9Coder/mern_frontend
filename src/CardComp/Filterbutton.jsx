import React, { useState } from 'react';
import JsonArray from './JSONary';
import Filtercards from './Filtercards';

export default function Filterbutton() {

    const compSet=new Set();
    JsonArray.map((obj)=>{
        compSet.add(obj.company)
    })
    console.log(compSet);
    const compAry=[...compSet,"All"];

    // function genbutton(obj)
    // {
    //     return (
    //         <button value={obj} key={obj.owner}>{obj}</button>
    //     )
    // }
    const [filterJsonAry,setFilter]=useState(JsonArray);

    function doFilter(event)
    {
        if(event.target.value==="All")
        {
            setFilter(JsonArray);
            return;
        }
        const filterCompAry=JsonArray.filter((obj)=>
        {
            if(obj.company===event.target.value)
            return obj;
        })
        setFilter(filterCompAry);
    }

  return (
    <>
    {/* <div>
        {
            compAry.map(genbutton)
        }
    </div> */}
    <center>
        <CompanyCombo data={compAry} filterfx={doFilter}></CompanyCombo>
    </center>
    <Filtercards data={filterJsonAry}></Filtercards>
    </>
  )
}
function CompanyCombo(props)
{
    function setCombo(str)
    {
        return (
                <option value={str}>{str}</option>
        )
    }

    return(
        <>
        <select onChange={props.filterfx}>
        {
            props.data.map(setCombo)
        }
        </select>
        </>
    )
}


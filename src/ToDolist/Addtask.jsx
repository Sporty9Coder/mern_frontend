import React, { useRef, useState } from 'react'

export default function Addtask({taskfx}) {
    const [name,setName]=useState("");

    return (
        <>
            <div>
                <h1>ToDoMatic</h1>
                <h2>What needs to be done?</h2>
            </div>
            <div>
                <input type="text" class="border-solid border-cyan-950 border-[2px] focus:ring-2 focus:ring-blue-500 w-60 text-lg leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-6 ring-1 ring-offset-blue-700 focus:outline-red-800 focus:outline-2 shadow-sm" value={name} placeholder='Add Task' onChange={(event)=>{
                    setName(event.target.value);
                }}/>
                <br /><br />
                <input type="button" value="Add" class='bg-amber-300 rounded-md w-24 h-14 text-purple-600 text-center m-2 font-bold text-lg' onClick={()=>{
                    taskfx(name);
                    setName("");
                    }}/>
            </div>
        </>
    )
}

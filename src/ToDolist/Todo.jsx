import React, { useState } from 'react'
import Taskbar from './Taskbar';
import Addtask from './Addtask';
import { nanoid } from 'nanoid';

export default function Todo() {
    //Hooks
    const [taskAry,settaskAry]=useState([]);
    const [show,setShow]=useState("");
    const [tasks,setTasks]=useState(taskAry);
    const [remTasks,setRemTasks]=useState(0);
    //=====================================================
    
    //Event handlers
    function addTask(value)
    {
        settaskAry([...taskAry,{title:value,status:false,id:{nanoid}}]);
        setRemTasks((remTasks)=>remTasks+1);
    }

    function deleteTask(id,status)
    {
        const updatedAry=taskAry.filter((obj)=>obj.id!==id)
        settaskAry(updatedAry);
        if(status==false)
        {
            setRemTasks((remTasks)=>remTasks-1);
        }
        const newUpdatedAry=tasks.filter((obj)=>obj.id!==id);
        setTasks(newUpdatedAry);
    }

    function updateStatus(id)
    {
        const updatedAry=taskAry.map((obj)=>
        {
            if(obj.id===id)
            {
                setRemTasks((remTasks=>remTasks-1));
                return ({...obj,status:!obj.status});
            }
            else {
                return obj;
            }
        })
        settaskAry(updatedAry);
        const newUpdatedAry=taskAry.map((obj)=>
        {
            if(obj.id===id)
            {
                return ({...obj,status:!obj.status});
            }
            else {
                return obj;
            }
        })
        setTasks(newUpdatedAry);
    }

    function editTask(id,value)
    {
        const updatedAry=taskAry.map((obj)=>{
            if(obj.id===id)
            {
                return({...obj,title:value})
            }
            else {
                return obj;
            }
        })
        settaskAry(updatedAry);
        const newUpdatedAry=tasks.map((obj)=>{
            if(obj.id===id)
            {
                return({...obj,title:value})
            }
            else {
                return obj;
            }
        })
        setTasks(newUpdatedAry);
    }

   function showAll()
   {
        setShow("All")
   }

   function showActive()
   {
        setShow("Active")
        const newAry=taskAry.filter((obj)=>obj.status===false)
        setTasks(newAry);
   }

   function showComplete()
   {
        setShow("Complete")
        const newAry=taskAry.filter((obj)=>obj.status===true)
        setTasks(newAry);
   }
    //======================================================

    //Components
    function Navbar()
    {
        return (
            <div>  
                <input type="button" class='bg-green-300 rounded-md w-16 h-12 text-red-700 m-2 text-center p-1 font-semibold text-2xl' value="All" onClick={showAll}/>
                <input type="button" class='bg-green-300 rounded-md w-20 h-12 text-red-700 m-2 text-center font-semibold p-1 text-2xl' value="Active" onClick={showActive}/>
                <input type="button" class='bg-green-300 rounded-md w-22 h-15 text-red-700 m-2 text-center p-[9px] font-semibold text-2xl' value="Completed" onClick={showComplete}/>
            </div>
        )
    }
    
    //====================================================
  return (
    <div>
    <center>
      <Addtask taskfx={addTask}/>
      <Navbar></Navbar>
      <div>
        <h2>{remTasks!=0?(<>{remTasks} {remTasks!=1?" tasks":" task"} remaining</>):("Congratulations 🎉🎉")}</h2>
      </div>
      </center>
      <div class="ml-[604px] w-[250px]">
        {
            show===""||show==="All"?(taskAry.map((obj)=>(<Taskbar {...obj} editfx={editTask} deletefx={deleteTask} statusfx={updateStatus}></Taskbar>))):(tasks.map((obj)=>(<Taskbar {...obj} editfx={editTask} deletefx={deleteTask} statusfx={updateStatus}></Taskbar>)))
        }
      </div>
    </div>
  )
}

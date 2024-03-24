import React, {useRef, useState} from 'react'

export default function Taskbar(props) {
    const [edit,setEdit]=useState(false);
    const refnew=useRef();
    const refstatus=useRef();
    return(
            <div>
                {!edit&&(<div class='flex-wrap'>
                    <div>
                        <input type="checkbox" class='w-14 h-5 m-3' id={props.id} checked={props.status} onChange={()=>props.statusfx(props.id)} ref={refstatus}/>
                        <label class='w-40 flex-auto h-8 text-start font-serif font-black text-yellow-800 rounded-md' htmlFor={props.id}>{props.title}</label>
                    </div>
                    <div >
                        {!props.status&&<input type="button" value="Edit" class='bg-slate-900 rounded-md w-20 h-12 text-slate-50 text-center m-2 p-1 font-bold' onClick={()=>setEdit(!edit)}/>}
                        <input type="button" value="Delete" class='bg-slate-900 rounded-md w-20 h-12 text-slate-50 text-center m-2 p-1 font-bold' onClick={()=>props.deletefx(props.id,refstatus.current.checked)}/>
                    </div>
                </div>)}
                {edit&&(<>
                    <div>
                        <input class="focus:ring-2 border-solid border-cyan-950 border-[2px] focus:ring-blue-500 focus:outline-red-800 focus:outline-2 w-60 text-lg leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-offset-blue-700 shadow-sm" autoFocus type="text" ref={refnew} placeholder={"edit"+" "+props.title}/>
                    </div>
                    <div>
                        <input type="button" value="Cancel" class='bg-slate-900 rounded-md w-20 h-12 text-slate-50 text-center m-2 p-1 font-bold' onClick={()=>setEdit(!edit)}/>
                        <input type="button" value="Save" class='bg-slate-900 rounded-md w-20 h-12 text-slate-50 text-center m-2 p-1 font-bold' onClick={()=>{
                            props.editfx(props.id,refnew.current.value);
                            setEdit(!edit);
                        }}/>
                    </div>
                </>)}
            </div>
    )
}

import React, { useState } from 'react'

export default function TicTacToe() {

    const [iconArry,setIconArry]=useState(Array(9).fill(''));
    const [status,setStatus]=useState(false);
    const [prevStateArry,setPrevStateArry]=useState([iconArry]);
    // const [count,setCount]=useState(0);

    function Zero_Cross(number)
    {
        // setCount(count+1);
        setPrevStateArry([...prevStateArry,iconArry]);
        console.log(prevStateArry);
        setIconArry(
                iconArry.map((elem,index)=>{
                    if(number===index)
                    {
                        if(status===false)
                        {
                            return 'X';
                        }
                        else {
                            return 'O';
                        }
                    }
                    else {
                        return elem;
                    }
                })
        )
        console.log(iconArry);
        setStatus(!status);
    }

    function goOneMoveBack(index)
    {
        setIconArry(prevStateArry[index]);
    }

    return (
        <>
        <h1 className='text-center m-auto'>TicTacToe</h1>
        <div>
        <div className='w-28 h-10 mx-auto mt-10 mb-0 flex'>
            {
                prevStateArry.map((elem,index)=>{
                    return (
                        <PrevBtn goOneMoveBack={goOneMoveBack} index={index}/>
                    )
                })
            }
        </div>
        <div className='w-72 h-72 mx-auto mt-10 border'>
        <div className='flex'>
            <Square value={0} icon={iconArry[0]} Zero_Cross={Zero_Cross}></Square>
            <Square value={1} icon={iconArry[1]} Zero_Cross={Zero_Cross}></Square>
            <Square value={2} icon={iconArry[2]} Zero_Cross={Zero_Cross}></Square>
        </div>
        <div className='flex'>
            <Square value={3} icon={iconArry[3]} Zero_Cross={Zero_Cross}></Square>
            <Square value={4} icon={iconArry[4]} Zero_Cross={Zero_Cross}></Square>
            <Square value={5} icon={iconArry[5]} Zero_Cross={Zero_Cross}></Square>
        </div>
        <div className='flex'>
            <Square value={6} icon={iconArry[6]} Zero_Cross={Zero_Cross}></Square>
            <Square value={7} icon={iconArry[7]} Zero_Cross={Zero_Cross}></Square>
            <Square value={8} icon={iconArry[8]} Zero_Cross={Zero_Cross}></Square>
        </div>
        </div>
        </div>
        </>
    )
}

function Square(props)
{

    function doChangeIcon(event)
    {
        props.Zero_Cross(parseInt(event.target.value));
    }

    return (
        <button value={props.value} className='w-24 h-24 border border-black text-6xl' onClick={doChangeIcon}>{props.icon}</button>
    )
}

function PrevBtn(props)
{
    return (
                <input type="button" value={"move "+props.index} className='btn btn-outline-secondary text-center p-1 m-1 font-semibold' onClick={props.goOneMoveBack(props.index)}/>
    )
}

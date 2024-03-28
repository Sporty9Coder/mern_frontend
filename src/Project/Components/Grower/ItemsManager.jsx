import React, { useState } from 'react'
import axios from 'axios'
import { baseURL } from '../../../services/axios.config';

export default function ItemsManager() {
    const [mArry,setmArry]=useState([{}]);
    const [fArry,setfArry]=useState([{}]);
    const [vArry,setvArry]=useState([{}]);
    const [email,setEmail]=useState("");
    const [state,setState]=useState(false);
    // const [path,setPath]=useState("");

    async function doFetch()
    {
        setState(true);
        const url=baseURL+"/users/fetch-items?email="+email;
        const serverMsg=await axios.get(url);
        // console.log(serverMsg.data);
        if(serverMsg.data.status===1)
        {
            const newmAry=serverMsg.data.res.filter((obj)=>obj.category==='Milk Product')
            setmArry(newmAry);

            const newfAry=serverMsg.data.res.filter((obj)=>obj.category==='Fruits')
            setfArry(newfAry);

            const newvAry=serverMsg.data.res.filter((obj)=>obj.category==='Vegetables')
            setvArry(newvAry);

            console.log(mArry);
            console.log(fArry);
            console.log(vArry);
            // alert(JSON.stringify(arrObj))
        }
        else if(serverMsg.data.status===2)
        {
            alert(serverMsg.data.res);
        }
        else alert(serverMsg.data.err);
        // console.log(arrObj);
    }

    async function deleteItem(id,category)
    {
      if(window.confirm("Are you sure you want to delete this item?")===false)
      {
        return;
      }
      const itemobjArry=mArry.filter((obj)=>obj._id===id);
      const leftItemsArry=mArry.filter((obj)=>obj._id!==id);
      const url=baseURL+"/users/delete-item";
      console.log(itemobjArry[0]);
      const serverMsg=await axios.post(url,itemobjArry[0]);
      if(serverMsg.data.status===true)
      {
        if(serverMsg.data.response===1)
        {
          if(category==="Milk Product")
          {
            setmArry(leftItemsArry);
          }
          else if(category==="Fruits")
          {
            setfArry(leftItemsArry);
          }
          else if(category==="Vegetables")
          {
            setvArry(leftItemsArry);
          }
        }
        else {
          alert(serverMsg.data.msg);
        }
      }
      else {
        alert(serverMsg.data.err);
      }
    }

    function getTable(obj)
    {
        // setPath("http://localhost:1000/uploads/"+obj.ppic)
        return (
            <ItemTable {...obj} deletefx={deleteItem}>

            </ItemTable>
        )
    }

    function ItemTable(props)
{
    return (
        <div class="overflow-x-auto container">
  <table class="table-auto min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          ObjId
        </th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Category
        </th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Item
        </th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Operations
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr>
        <td class="px-6 py-4 whitespace-nowrap">
            {props._id}
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            {props.category}
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            {props.item}
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            {state&&<button type='button' class="btn btn-warning text-center p-1 pb-1" onClick={()=>{props.deletefx(props._id,props.category)}}>Delete</button>}
        </td>
      </tr>
    </tbody>
  </table>
</div>
    )
}

  return (
    <>
    <div className='pl-36 mt-2 ml-36 flex'>
        <div className="mb-6 w-60">
          <label htmlFor="email" className="block font-semibold mb-2">Email:</label>
          <input type="email" name="email" id="email" className="block w-auto px-4 py-2 rounded-md border border-black bg-white text-gray-800 focus:outline-none focus:border-indigo-500" onChange={(event)=>{setEmail(event.target.value)}}/>
        </div>
        <div className='w-28 text-center bg-black text-white rounded-md mt-[33px] ml-7 pt-1 pb-1 font-semibold h-10 border'>
            <button type='button' onClick={doFetch}>Fetch</button>
        </div>
    </div>
    <div className='flex'>
    {
        mArry.map(getTable)
    }
    {
        fArry.map(getTable)
    }
    {
        vArry.map(getTable)
    }
    </div>
    </>
  )
}



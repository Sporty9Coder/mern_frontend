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

    async function deleteItem(id,category,item)
    {
      if(window.confirm("Are you sure you want to delete this item?")===false)
      {
        return;
      }
      const obj={
        itemname:item,
        objid:id
      }
      var leftItemsArry=[];

      if(category==="Milk Product")
      {
        leftItemsArry=mArry.filter((obj)=>obj._id!==id);
      }
      else if(category==="Fruits")
      {
        leftItemsArry=fArry.filter((obj)=>obj._id!==id);
      }
      else if(category==="Vegetables")
      {
        leftItemsArry=vArry.filter((obj)=>obj._id!==id);
      }

      console.log(leftItemsArry);
      
      const url=baseURL+"/users/delete-item";
      const serverMsg=await axios.post(url,obj);
      console.log(serverMsg.data.res);
      if(serverMsg.data.status===true)
      {
          alert(serverMsg.data.deleteditem+" deleted for "+serverMsg.data.res.email);
          if(category==="Milk Product")
          {
            setmArry([...leftItemsArry,serverMsg.data.res]);
          }
          else if(category==="Fruits")
          {
            setfArry([...leftItemsArry,serverMsg.data.res]);
          }
          else if(category==="Vegetables")
          {
            setvArry([...leftItemsArry,serverMsg.data.res]);
          }
      }
      else {
        alert(serverMsg.data.error);
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
  console.log(props.item);
  if (props.item && props.item.length > 0){
    return (
      props.item.map(
        (str)=>{
          return(
            <tr>
        <td class="px-6 py-4 whitespace-nowrap w-1/2 text-center">
            {str}
        </td>
        <td class="px-6 py-4 whitespace-nowrap w-1/2 text-center">
            {state&&<button type='button' class="btn btn-warning text-center p-1 pb-1" onClick={()=>{props.deletefx(props._id,props.category,str)}}>Delete</button>}
        </td>
      </tr>
          )
        }
      )
    )}
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
    <div class="overflow-hidden container">
  <table class="table-auto min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th colSpan={2} class="px-6 py-3 text-center text-lg font-semibold text-green-600 bg-amber-500 bg-opacity-70 font-merriweather">
          Milk Products
        </th>
      </tr>
      <tr>
        <th colSpan={1} class="px-6 py-3 text-center text-lg font-semibold text-gray-500 font-plexserif tracking-wider w-1/2">
          Items
        </th>
        <th colSpan={1} class="px-6 py-3 text-center text-lg font-semibold text-gray-500 font-plexserif tracking-wider w-1/2">
          Operations
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      {
        mArry.map(getTable)
      }
    </tbody>
  </table>
</div>
   
<div class="overflow-hidden container">
  <table class="table-auto min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
    <tr>
        <th colSpan={2} class="px-6 py-3 text-center text-lg font-semibold text-green-600 bg-amber-500 bg-opacity-70 font-merriweather">
          Fruits
        </th>
      </tr>
      <tr>
        <th colSpan={1} class="px-6 py-3 text-center text-lg font-semibold text-gray-500 font-plexserif tracking-wider w-1/2">
          Items
        </th>
        <th colSpan={1} class="px-6 py-3 text-center text-lg font-semibold text-gray-500 font-plexserif tracking-wider w-1/2">
          Operations
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      {
        fArry.map(getTable)
      }
    </tbody>
  </table>
</div>

<div class="overflow-hidden container">
  <table class="table-auto min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
    <tr>
        <th colSpan={2} class="px-6 py-3 text-center text-lg font-semibold text-green-600 bg-amber-500 bg-opacity-70 font-merriweather">
          Vegetables
        </th>
      </tr>
      <tr>
        <th colSpan={1} class="px-6 py-3 text-center text-lg font-semibold text-gray-500 font-plexserif tracking-wider w-1/2">
          Items
        </th>
        <th colSpan={1} class="px-6 py-3 text-center text-lg font-semibold text-gray-500 font-plexserif tracking-wider w-1/2">
          Operations
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      {
        vArry.map(getTable)
      }
    </tbody>
  </table>
</div>
    </div>
    </>
  )
}



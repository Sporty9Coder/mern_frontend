import React, { useEffect, useRef, useState } from 'react'
import { fetchCity,findGrower, fullGrowerDetails } from '../services/user-controller'

function ItemList(props)
{
  return (
            props.arry[props.index].map((item)=>
            {
              return (
                <option value={item}>{item}</option>
              )
            })
  )
}

export default function FetchGrower() {

    const listItems= [
        ["paneer","curd","cheese","ice cream"],
        ["apple","watermelon","kiwi","dragon fruit"],
        ["potato","onion","tomato","spinach"],
      ]
  
      const [index,setIndex]=useState(-1);
      const [cityAry,setCityAry]=useState([]);
      const categoryRef=useRef();
      const itemRef=useRef();
      const cityRef=useRef();
      const demoobj={empty:"empty"};
      const [growerObjAry,setGrowerObjAry]=useState([{empty:"empty"}]);
      const [fullDetailsAry,setFullDetailsAry]=useState([{empty:"empty"}]);
      const [toggle,setToggle]=useState(false);

      useEffect(
        ()=>fetchCityfx()
      ,[])

      async function fetchCityfx()
      {
        const serverMsg=await fetchCity();
        console.log(serverMsg);
        if(serverMsg.data.status===true)
        setCityAry(serverMsg.data.cities);
      else alert(serverMsg.data.error+" ,"+serverMsg.data.msg);
      }

      async function findGrowerDetails()
      {
        let category="";
        if(categoryRef.current.value==='0')
        {
            category="Milk Product";
        }
        else if(categoryRef.current.value==='1')
        {
            category="Fruits";
        }
        else category="Vegetables"
        const obj={
          category:category,
          item:itemRef.current.value,
          city:cityRef.current.value
        }
        const serverMsg=await findGrower(obj);
        console.log(serverMsg.data);
        // alert(serverMsg.data.email);
        if(serverMsg.data.status===true)
        setGrowerObjAry(serverMsg.data.res);
      else alert(serverMsg.data.error);
      }

      async function fullDetails(groweremail)
      {
        const serverMsg=await fullGrowerDetails(groweremail);
        console.log(serverMsg.data.res);
        if(serverMsg.data.status===true)
        {
          console.log(serverMsg.data.res);
          setFullDetailsAry(serverMsg.data.res);
        }
        else alert(serverMsg.data.error);
      }

      return (
        <div className='container mt-5'>
          <div className="mb-6">
            <div className="flex mb-2">
              <div className="w-1/2 mr-2">
                <label htmlFor="category" className="block font-semibold mb-2">Product Category:</label>
                <select name="category" id="category" ref={categoryRef} className="block w-full px-4 py-2 rounded-md border border-gray-700 bg-white text-gray-800 focus:outline-none focus:border-indigo-500" onChange={(event)=>setIndex(event.target.value)}>
                  <option value="select category">select category</option>
                  <option value={0}>Milk Product</option>
                  <option value={1}>Fruits</option>
                  <option value={2}>Vegetables</option>
                </select>
              </div>
              <div className="w-1/2 ml-2"> 
                    <label htmlFor="itemList" className="block font-semibold mb-2">Select Items:</label>
                    <select name="itemList" id="itemList" ref={itemRef} className="block w-full px-4 py-2 rounded-md border border-gray-700 bg-white text-gray-800 focus:outline-none focus:border-indigo-500">
                      <option value="choose">choose</option>
                      {index !== -1 &&<ItemList index={index} arry={listItems}/>}
                    </select>
              </div>
              <div className="w-1/2 ml-2">
                    <label htmlFor="cityList" className="block font-semibold mb-2">Select City:</label>
                    <select name="cityList" id="cityList" ref={cityRef} className="block w-full px-4 py-2 rounded-md border border-gray-700 bg-white text-gray-800 focus:outline-none focus:border-indigo-500">
                      <option value="choose">choose</option>
                      {
                        cityAry.map((str)=>{
                          return (
                            <option value={str}>{str}</option>
                          )
                        })
                      }
                    </select>
              </div>
            </div>
          </div>
          <div>
            {growerObjAry[0]!==demoobj&&<GrowerCard arryObj={growerObjAry} fullDetailsfx={fullDetails} setToggle={setToggle}/>}
          </div>
          {toggle&&<AllDetails detailary={fullDetailsAry} setToggle={setToggle} setDetailsAryfx={setFullDetailsAry}/>}
          <div className='mt-5'>
            <center>
                <input type="button" value="Find Grower" className='w-32 font-bold bg-yellow-300 text-purple-900 rounded-md border-black border p-2 text-center' onClick={findGrowerDetails}/>
            </center>
          </div>
        </div>
      )
    
}

function GrowerCard(props)
{
  return (
    <div className="flex flex-wrap justify-center">
      {props.arryObj.map((obj, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <div className="px-6 py-4">
            <p className="text-gray-700 text-base mb-2">Email: {obj.email}</p>
            <p className="text-gray-700 text-base mb-2">Items: {obj.item}</p>
            <p className="text-gray-700 text-base mb-2">City: {obj.city}</p>
            <p className="text-gray-700 text-base mb-2">Category: {obj.category}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={()=>{
              props.fullDetailsfx(obj.email)
              props.setToggle(true);
            }}>
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
  
  
}

function AllDetails(props)
{
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg shadow-lg min-w-lg">
        <div className="text-center mb-4">
          <img src={"https://mern-project-wnyo.onrender.com/uploads/"+props.detailary.picpath} alt="Grower" className="w-40 h-40 mx-auto rounded-full" />
          <h2 className="text-2xl font-bold mt-4 text-gray-800">{props.detailary.name}</h2>
        </div>
        <div className="text-left">
          <p className="text-gray-700 mb-2"><span className="font-semibold text-gray-900">Email:</span> {props.detailary.email}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold text-gray-900">Address:</span> {props.detailary.address}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold text-gray-900">City:</span> {props.detailary.city}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold text-gray-900">Category:</span> {props.detailary.category}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold text-gray-900">Mobile:</span> {props.detailary.mobile}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold text-gray-900">Aadhar No:</span> {props.detailary.aadharno}</p>
        </div>
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={()=>{
          props.setToggle(false);
          props.setDetailsAryfx([{}]);
        }}>
          Close
        </button>
      </div>
    </div>
  );
  
}

import React, { useState } from 'react'
import axios from "axios";

export default function Curd() {
    const [obj,setObj]=useState({
        item:"",
        category:"",
        dop:"",
        price:0,
        pic:null
    })

    function doUpdateObj(event)
    {
        const {name,value}=event.target;
        setObj({...obj,[name]:value});
    }

    function doUpdatePic(event)
    {
        alert(JSON.stringify(event.target.files));
        setObj({...obj,["pic"]:event.target.files[0]});
    }

    async function doSaveWithAxios()
    {
        const url=`http://localhost:1000/product/add-product?item=${obj.item}&price=${obj.price}&category=${obj.category}&dop=${obj.dop}`;
        const servermsg=await axios.get(url);
        alert(JSON.stringify(servermsg));
        console.log(servermsg);
        if(servermsg.data.status===true)
        {
            alert("saved Successfullyyyyy by get");
        }
        else {
            alert(servermsg.data.msg+" "+servermsg.data.err);
        }
    }

    async function doSaveWithAxiosPost()
    {
        const url="http://localhost:1000/product/add-product";
        const servermsg=await axios.post(url,obj);
        alert(JSON.stringify(servermsg));
        console.log(servermsg);
        if(servermsg.data.status===true)
        {
            alert("saved Successfullyyyyy by post");
        }
        else {
            alert(servermsg.data.msg+" "+servermsg.data.err)
        }
    }

    async function doSaveWithAxiosPostWithPic(req,resp)
    {
        var formdata=new FormData();
        for(var props in obj)
        {
            formdata.append(props,obj[props]);
        }
        var url="http://localhost:1000/product/add-product";
        const serverMsg=await axios.post(url,formdata,{headers:{'Content-Type':'multipart/form-data'}});
        if(serverMsg.data.status===true)
        {
            alert("saved Successfullyyyyy with pic with post");
        }
        else {
            alert(serverMsg.data.msg+" "+serverMsg.data.err);
        }
    }

  return (
    <div className='mx-auto border border-black w-[300px]'>
    <p>
        Item: <input type="text" onChange={doUpdateObj} name='item' className='border border-black mt-1'/>
    </p>
    <p>
        Category: <input type="text" onChange={doUpdateObj} name='category' className='border border-black'/>
    </p>
    <p>
        DOP: <input type="date" name="dop" onChange={doUpdateObj} className='border border-black p-1'/>
    </p>
    <p>
        Price: <input type="text" 
      onChange={doUpdateObj} name='price' className='border border-black'/>
    </p>
    <p>
        Profile Pic: <input type="file" name='pic' onChange={doUpdatePic}/>
    </p>
    <p>
        <input type="button" value="Do save with get" onClick={doSaveWithAxios} className='border border-black p-2 ml-2'/>
    </p>
    <p>
        <input type="button" value="Do save with post" onClick={doSaveWithAxiosPostWithPic} className='border border-black p-2 ml-2'/>
    </p>
    </div>
  )
}

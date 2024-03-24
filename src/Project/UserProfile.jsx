import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import axios from 'axios';
import { useState } from 'react'

export default function Example() {
    const [userobj,setUserObj]=useState({
        name:"",
        email:"",
        country:"",
        gender:"",
        age:0,
        city:"",
        address:"",
        pic:null
    })

    const [prevImg,setPrevImg]=useState("");

function doUpdateUserObj(event)
{
    const {name,value}=event.target;
    if(name==="pic")
    {
        alert(JSON.stringify(event.target.files[0]));
        setUserObj({...userobj,[name]:event.target.files[0]})
        setPrevImg("http://localhost:1000/uploads/"+event.target.files[0]);
    }
    else
    {
        setUserObj({...userobj,[name]:value})
    } 
}

async function doSaveWithAxios()
{
    console.log(userobj);
    const url="http://localhost:1000/users/add-profile";
    const formdata=new FormData();
    for(var props in userobj)
    {
        formdata.append(props,userobj[props]);
    }
    const serverMsg=await axios.post(url,formdata,{headers:{"Content-type":"multipart/form-data"}});

    if(serverMsg.data.status===true)
    {
        alert("signed in");
        setPrevImg("http://localhost:1000/uploads/"+serverMsg.data.res.picname);
    }
    else{
        alert(serverMsg.data.msg+" "+serverMsg.data.err);
    }
}

async function dofetch()
{
  // alert(userobj.email);
  const url=`http://localhost:1000/users/fetch-data?email=${userobj.email}`;
  const servermsg=await axios.get(url);
        // alert(JSON.stringify(servermsg.data.res));
        console.log(servermsg);
        if(servermsg.data.status===true)
        {
            console.log(servermsg.data.res);
            // alert(servermsg.data.res.picname);
            setUserObj(servermsg.data.res);
            setPrevImg("http://localhost:1000/uploads/"+servermsg.data.res.picname);
            // alert(JSON.stringify(userobj));
        }
        else {
            alert(servermsg.data.err);
        }
}

async function doUpdateWithAxios()
{
  var url="http://localhost:1000/users/update-user";
  const formdata=new FormData();
    for(var props in userobj)
    {
        formdata.append(props,userobj[props]);
    }
    const serverMsg=await axios.post(url,formdata,{headers:{"Content-type":"multipart/form-data"}});

    if(serverMsg.data.status===true)
    {
        alert("updated successfully");
        setUserObj(serverMsg.data.res);
        setPrevImg("http://localhost:1000/uploads/"+serverMsg.data.res.picname);
    }
    else{
        alert(serverMsg.data.err);
    }
}

  return (
    <form className='container'>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">

          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <div className="sm:col-span-6">
          <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                <input
                  type="file"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" name='pic' onChange={doUpdateUserObj}
                />
              </div>
              <input type='button' value='search' className='border border-black p-1 rounded-md' onClick={dofetch}/>
            </div>
            <div>
              <img src={prevImg} alt="" className='w-20 h-20 flex'/>
            </div>
          </div>
          </div>
        </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={doUpdateUserObj} value={userobj.name}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={doUpdateUserObj} value={userobj.email}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={doUpdateUserObj} value={userobj.country}
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address"
                  id="address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={doUpdateUserObj} value={userobj.address}
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={doUpdateUserObj} value={userobj.city}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Gender
              </label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={doUpdateUserObj} value={userobj.gender}
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                Age
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="age"
                  id="age"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={doUpdateUserObj} value={userobj.age}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={doUpdateWithAxios}>
          Update
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={doSaveWithAxios}
        >
          Save
        </button>
      </div>
      
    </form>
  )
}

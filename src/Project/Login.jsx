import React, { useState } from 'react'
import axios from 'axios'
import { Routes,Route, useNavigate } from 'react-router-dom';
import SignUp from './SignUp.jsx';

export default function Login() {
    const [obj,setObj]=useState({
        email:"",
        password:""
    })

    const navigate=useNavigate();

    function doUpdate(event)
    {
        const {name,value}=event.target;
        setObj({...obj,[name]:value});
    }

    async function doLogin()
    {
        const url="https://mern-project-wnyo.onrender.com/users/login"
        const serverMsg=await axios.post(url,obj);
        if(serverMsg.data.status===true)
        {
            console.log("token generated"+" "+serverMsg.data.jtoken);
            localStorage.setItem("access_token",serverMsg.data.jtoken);
            if(serverMsg.data.msg==="Grower")
            {
              alert(serverMsg.data.msg);
              navigate("/growerdash");
            }
            else if(serverMsg.data.msg==="Consumer")
            {
              alert(serverMsg.data.msg);
              navigate("/consumerdash");
            }
        }
        else {
            alert(serverMsg.data.message+" "+serverMsg.data.err);
        }
    }

    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login In
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={doUpdate}
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={doUpdate}
                  />
                </div>
              </div>
  
              <div className='flex'>
                <button
                  type="button"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-2" onClick={doLogin}
                >
                  Log in
                </button>
                <button
                  type="button"
                  className="flex m-2 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={()=>{navigate("/testwebtoken")}}
                >
                  Test Web Token
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="/gotosignup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign In here
              </a>
            </p>
          </div>
        </div>
        <Routes>
          <Route path='/gotosignup' element={<SignUp></SignUp>}></Route>
        </Routes>
      </>
    )
  }
  
import axios from 'axios';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import { baseURL } from '../../../services/axios.config.js';

export default function SignUp() {

  const [signUpobj, setSignUpobj] = useState({
    emailid: "",
    password: "",
    usertype: ""
  })
  const [isValid, setIsValid] = useState(true);

  function doUpdate(event) {
    const { name, value } = event.target;
    // alert(name+" "+value);
    setSignUpobj({ ...signUpobj, [name]: value });
  }

  function checkValidEmail(event)
  {
    setIsValid(/^\S+@\S+\.\S+$/.test(event.target.value));
  }

  async function signUp() {
    // alert("hello");
    const url = baseURL+"/users/signup";
    const serverMsg = await axios.post(url, signUpobj);
    if (serverMsg.data.status === true) {
      alert("signed in successfully");
    }
    else {
      alert(serverMsg.data.err);
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className={`block text-sm font-medium leading-6 text-gray-900 ${isValid ? 'border-green-500' : 'border-red-500'
                }`}>
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="emailid"
                  name="emailid"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={doUpdate} onBlur={checkValidEmail}
                />
              </div>
              {!isValid && (
                <p className="text-red-500 text-sm">Please enter a valid email address</p>
              )}
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={doUpdate}
                />
              </div>

              <div className="flex items-center justify-between mt-3">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Type
                </label>
              </div>
              <div className="mt-2">
                <select
                  id="usertype"
                  name="usertype"
                  autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={doUpdate}>
                  <option>Select Type</option>
                  <option>Grower</option>
                  <option>Consumer</option>
                </select>
              </div>
            </div>
            <div>
              <input
                type="button" value='Sign In'
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={signUp} disabled={!isValid}
              />
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{' '}
            <a href="/gotoLogin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login Here
            </a>
          </p>
        </div>
      </div>
      <Routes>
        <Route path='/gotoLogin' element={<Login></Login>}></Route>
      </Routes>
    </>
  )
}

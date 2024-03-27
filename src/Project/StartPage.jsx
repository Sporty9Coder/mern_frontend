import React, { useState } from 'react'
import {useNavigate,Link, useSearchParams} from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react';

export default function StartPage() {

  const navigate=useNavigate();

    function doSignUp()
    {
      navigate("/gotosignup");
    }

    function doLogin()
    {
      navigate("/gotoLogin");
    }

    function logout()
    {
      localStorage.removeItem("access_token");
      navigate("/gotohome")
    }

    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }    

  return (
    <div>
      <div className='fixed text-center font-medium pt-2 text-2xl flex w-screen h-24 bg-transparent text-white'>
        <button className='ml-2 h-12 w-10 mt-2'>
          <img src="https://static.thenounproject.com/png/462023-200.png" alt="" />
        </button>
        <button className='ml-2 mt-2 h-12 w-72 hover:bg-black hover:rounded-lg hover:bg-opacity-50'>Categories</button>
        <button className='ml-2 mt-2 h-12 w-72 hover:bg-black hover:rounded-lg hover:bg-opacity-50'>Products</button>
        <button className='ml-2 mt-2 h-12 w-72 hover:bg-black hover:rounded-lg hover:bg-opacity-50 peer-hover:'>Services</button>
        <div className='ml-2 mt-2 h-12 w-72'></div>
        <div className='ml-2 mt-2 h-12 w-72 flex'>
          <input type="button" value="SignUp" className='font-normal text-xl p-2 ml-3 rounded items-end hover:bg-black hover:text-white' onClick={doSignUp}/>
          <input type="button" value="Login" className='font-normal text-xl p-2 ml-3 rounded items-end hover:bg-black hover:text-white' onClick={doLogin}/>
          <Menu as="div" className="ml-10 w-10">
            <div>
              <Menu.Button className="relative flex text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <img src="https://static-00.iconduck.com/assets.00/settings-icon-1964x2048-8nigtrtt.png" alt="" />
              </Menu.Button>
            </div>
            <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Account Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={logout}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <img src="https://png.pngtree.com/thumb_back/fh260/background/20240102/pngtree-abundant-organic-wheat-vibrant-green-and-yellow-ears-filled-with-grains-image_13823662.png" alt="" className='w-screen h-96'/>
    </div>
  )
}
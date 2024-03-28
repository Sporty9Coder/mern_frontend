import React from 'react';
import {Routes,Route, useLocation} from 'react-router-dom';
import SignUp from './SignUp.jsx'
import Login from './Login.jsx'
import GrowerDash from './GrowerDash.jsx';
import ConsumerDash from './ConsumerDash.jsx';
import GrowerProfile from './GrowerProfile.jsx'
import AvailProduct from './AvailProduct.jsx'
import ItemsManager from './ItemsManager.jsx'
import StartPage from './StartPage.jsx';
import PageNotFound from './PageNotFound.jsx'
import FetchGrower from './FetchGrower.jsx';
import {useNavigate,Link, useSearchParams} from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react';

export default function HomePage() {    

  const navigate=useNavigate();
  const location=useLocation();

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

    console.log(location);
    const rendernavbar=location.pathname!=='/'||location.pathname!=='/gotohome';

    return (
      <>
      {rendernavbar&&<div className='text-center font-medium pt-2 text-2xl flex w-screen h-[85px] bg-green-500 bg-opacity-80 text-white mb-5'>
        <button className='ml-2 h-12 w-10 mt-2'>
          <img src="https://static.thenounproject.com/png/462023-200.png" alt="" />
        </button>
        <button className='ml-2 mt-2 h-12 w-72 hover:bg-green-950 hover:rounded-lg hover:bg-opacity-50'>Categories</button>
        <button className='ml-2 mt-2 h-12 w-72 hover:bg-green-950 hover:rounded-lg hover:bg-opacity-50'>Products</button>
        <button className='ml-2 mt-2 h-12 w-72 hover:bg-green-950 hover:rounded-lg hover:bg-opacity-50 peer-hover:'>Services</button>
        <div className='ml-2 mt-2 h-12 w-72'></div>
        <div className='ml-2 mt-2 h-12 w-72 flex'>
          <input type="button" value="SignUp" className='font-normal text-xl p-2 ml-3 rounded items-end hover:bg-green-950 hover:bg-opacity-50' onClick={doSignUp}/>
          <input type="button" value="Login" className='font-normal text-xl p-2 ml-3 rounded items-end hover:bg-green-950 hover:bg-opacity-50' onClick={doLogin}/>
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
                          <button
                            className={classNames(active ? 'bg-gray-100 text-center' : '', 'block px-4 py-2 text-sm text-gray-700 text-center')}
                          >
                            Account Settings
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={logout}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 text-center')}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>}











        <Routes>
          <Route path='/' element={<StartPage/>}></Route>
          <Route path='/gotosignup' element={<SignUp/>}></Route>
          <Route path='/gotoLogin' element={<Login/>}></Route>
          <Route path='/growerdash' element={<GrowerDash/>}></Route>
          <Route path='/consumerdash' element={<ConsumerDash/>}></Route>
          <Route path='/gotoGProfile' element={<GrowerProfile/>}></Route>
          <Route path='/gotoavailproduct' element={<AvailProduct/>}></Route>
          <Route path='/gotoItemManager' element={<ItemsManager/>}></Route>
          <Route path='/gotohome' element={<StartPage/>}></Route>
          <Route path='/fetchgrower' element={<FetchGrower/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
        </>
    )
  }
  
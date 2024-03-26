import React from 'react';
import {Routes,Route} from 'react-router-dom';
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

export default function HomePage() {    
    return (
      <>
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
  
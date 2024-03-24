import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Card from './CardComp/Card';
// import reportWebVitals from './reportWebVitals';
import Cardshow from './CardComp/Cardshow';
import ProductCard from './CardComp/Cardshow';
import Filterbutton from './CardComp/Filterbutton';
import Counter from './Hooks/Counter';
import Yourname from './Hooks/Fullname';
import FullnameObj from './Hooks/FullnameObj';
import UseEffect from './UseEffect';
import Todo from './ToDolist/Todo';
import Password from './Hooks/Password';
import Conditionalrender from './CondRender/Conditionalrender';
import Home from './Context/Home';
import BsCard from './Bootstrap/BsCard';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './Bootstrap/NavBar'
import Profile from './Bootstrap/Profile';
import JSG from './Tailwindd/JSG';
import CURD from './Axioss/CURD';
import UserProfile from './Project/UserProfile';
import SignUp from './Project/SignUp';
import GrowerProfile from './Project/GrowerProfile';
import Login from './Project/Login';
import AvailProduct from './Project/AvailProduct';
import ItemsManager from './Project/ItemsManager';
import TicTacToe from './TicTacToe/TicTacToe';
import HomePage from './Project/HomePage';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
    {/* <App /> */}
    {/* <Card></Card>
    <Card/>
    <Card></Card> */}
    {/* <Home/> */}
    {/* <Cardshow></Cardshow> */}
    {/* <Filterbutton></Filterbutton> */}
    {/* <Counter/> */}
    {/* <Yourname/> */}
    {/* <Conditionalrender/> */}
    {/* <FullnameObj/> */}
    {/* <UseEffect/> */}
    {/* <Todo/> */}
    {/* <BsCard/> */}
    {/* <NavBar/> */}
    {/* <JSG/> */}
    {/* <Profile/> */}
    {/* <Password/> */}
    {/* <CURD></CURD> */}
    {/* <UserProfile></UserProfile> */}
    {/* <SignUp></SignUp> */}
    {/* <GrowerProfile></GrowerProfile> */}
    {/* <Login></Login> */}
    {/* <AvailProduct></AvailProduct>  */}
    {/* <ItemsManager></ItemsManager> */}
    {/*<TicTacToe></TicTacToe>*/}
    <HomePage/>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

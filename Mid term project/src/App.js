import './App.css';
import Header from './Components/Header/Header'
import {Routes,Route} from 'react-router-dom'
import React from 'react';
import HomePage from './Components/HomePage/HomePage';
import Electronics from './Components/Electronics/Electronics'
import Jwellery from './Components/Jwellery/Jwellery';
import MenClothing from './Components/MenClothing/MenClothing'
import WomenClothes from './Components/WomenClothes/WomenClothes';
import Login from './Components/Login/Login'
import SignupForm from './Components/SignupForm/SignupForm'
import All from './Components/All/All';
function App() {
  return (
    <>
   <Header/>

   
   <Routes>
   

    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/All' element={<All/>}></Route>
    <Route path='/Electronics' element={<Electronics/>}></Route>
    <Route path='/Jwellery' element={<Jwellery/>}></Route>
    <Route path='/MenClothing' element={<MenClothing/>}></Route>
    <Route path='/WomenClothes' element={<WomenClothes/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/SignupForm' element={<SignupForm/>}></Route>
  
  </Routes>

   </>
  );
}

export default App;

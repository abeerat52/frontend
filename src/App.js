import React from 'react';
import './App.css';
import Home from './container/Home/Home';
import Navbar from './container/Home/header/Navbar'
import Signup from './container/register/SignUp';
import Login from './container/login/Login';
import { Routes,Route } from 'react-router-dom';
import Drugs from './container/Drugs/Drugs';
import DashBord from './container/AdminDashbord/DashBord';
function App() {
  return (
  <>
    <Navbar/>
   <Home/> 
  
    <Routes>
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/dashbord" element={<DashBord />} />
     <Route path="/drugs" element={<Drugs/>} />
    </Routes>
 
   
      </>
  );
}
export default App;

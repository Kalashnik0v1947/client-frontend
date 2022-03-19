/* MAIN FUNCTIONS */
import React from 'react'
import { Routes, Route } from 'react-router-dom'


import './App.css';

/* COMPONENT ROUTES */
import Home from './comps/Home'
import Info from './comps/Info'
import Login from './comps/Login'
import Menu from './comps/Menu'
import Navbar from './comps/Navbar'
import Profile from './comps/Profile'
import Reso from './comps/Reso'
import Signup from './comps/Signup'
import ViewUser from './comps/ViewUser'
import UpdateReso from './comps/UpdateReso';
import CheckIn from './comps/CheckIn';



/* APP */ 
function App() {





  return (
    <div className="App">
    
    <Navbar />

    <Routes>
      <Route path='/home' element={ <Home /> } />
      <Route path='/info' element={ <Info/> } />
      <Route path='/login' element={ <Login/> } />
      <Route path='/menu' element={ <Menu/> } />
      <Route path='/profile' element={ <Profile/> } />
      <Route path='/reservations' element={ <Reso/> } />
      <Route path='/signup' element={ <Signup/> } />
      <Route path='/view-user/:userId' element={ <ViewUser /> } />
      <Route path='/reso/view/:resoId' element={ <UpdateReso /> } />
      <Route path='/reservations/:resoId' element={ <CheckIn /> } />
    </Routes>

    </div>
  );
}

export default App;

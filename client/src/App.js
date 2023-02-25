import React from 'react';
import  { Routes, Route} from "react-router-dom"
import './App.css';
import Login from './components/login';
import Home  from './components/home';
import {Link} from 'react-router-dom'

function App() {
  return (
    <>
    <div className="App">
      <div className='header'>
        <ul>
          <li> <Link to='/login'>login </Link></li>
          <li> <Link to='/'>home</Link></li>
        </ul>
      </div>
    
        
      <Routes>
        <Route  path="/login" element={<Login />}/>
        <Route  path="/" element={<Home />}/>
      </Routes>
        
     
    </div>
  
    </>
  );
}

export default App;

import React from 'react';
import  { Routes, Route} from "react-router-dom"
import './App.css';
import Login from './components/login';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        
        
         Header 
         <p>----------------------------------------------------------------  </p>
      <Routes>
        <Route  path="/login" element={<Login />}/>
      </Routes>
        
      </header>
    </div>
  
    </>
  );
}

export default App;

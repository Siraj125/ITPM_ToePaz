import React from 'react';
import  { Routes, Route} from "react-router-dom"
import {Link} from 'react-router-dom'
import './App.css';
import Login from './components/login';
import Home  from './components/home';
import Calculator  from './components/calculator';
import Addarticles from './components/addarticle';
import UpdateArticle from './components/updateArticle';
import ArticleReport from './components/articleReport';
import ArticlePage from './components/articlePage';

function App() {
  return (
    <>
    <div className="App">
      <div className='header'>
        <ul className='header-list'>
          <li> <Link to='/login'>login </Link></li>
          <li> <Link to='/'>home</Link></li>
          <li> <Link to='/articles'>articles</Link></li>
          <li> <Link to='/calculator'>calculate</Link></li>

        </ul>
      </div>
    
        
      <Routes>
        <Route  path="/login" element={<Login />}/>
        <Route  path="/" element={<Home />}/>
        <Route  path="/articles" element={<Addarticles />}/>
        <Route  path="/updateArticle/:id" element={<UpdateArticle/>}/>
        <Route  path="/ArticleReport" element={<ArticleReport/>}/>
        <Route  path="/calculator" element={<Calculator />}/>
        <Route  path="/articlePage/:id" element={<ArticlePage/>}/>


      </Routes>
        
     
    </div>
  
    </>
  );
}

export default App;

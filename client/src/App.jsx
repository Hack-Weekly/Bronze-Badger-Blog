import React from 'react';
import './App.css';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Login from './components/Home/Login/Login';
import Register from './components/Home/Register/Register';
import SearchBar from './components/Home/SearchBar/search';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="container">
       

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/posts/:id' element={<Posts />} />    
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/search' element={<SearchBar />} />
   
      </Routes>

     
    </div>

  )
  };

export default App;

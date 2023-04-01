import React from 'react';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Login from './components/Home/Login';
import Register from './components/Home/Register';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/blog/:id' element={<Blog />} />    
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;

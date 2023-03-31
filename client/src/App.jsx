import React from 'react';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/blog/:id' element={<Blog />} />    
      </Routes>
    </div>
  );
};

export default App;


import React from 'react';
import './App.css';
import Home from './pages/Home';
import Nav from './Nav'
import Landing from './Landing'
import Posts from './pages/Posts';
import Login from './components/Home/Login/Login';
import Register from './components/Home/Register/Register';
import SearchBar from './components/Home/SearchBar/search';
import { Routes, Route } from 'react-router-dom';
import LoginRegisterCard from './LoginRegisterCard';

const App = () => {
  return (
    <div className="container">
      <Nav></Nav>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path="/blog/" element={<></>} /> 
        <Route exact path='/posts/:id' element={<Posts />} />    
        <Route exact path='/login' element={<></>} />
        <Route exact path='/register' element={<></>} />
        <Route exact path='/search' element={<SearchBar />} />
      </Routes>
    </div>
  );
};

export default App;

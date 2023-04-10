import React from 'react';
import Header from '../../components/Home/Header';
import Login from '../../components/Home/Login/Login';
import Register from '../../components/Home/Register/Register';
import SearchBar from '../../components/Home/SearchBar/search';
import LP from "../../components/LandingPage/LandingHome";

const Home = () => {
  return (
    <div>
      <LP/>
      {/* Header */}
      <Header />

      {/*Register/LogIn*/}
      <div className="auth-container">
        <Login />
        <Register />
      </div>

      {/* Search Bar */}
        <SearchBar />

      {/*Navigation*/}

      {/* Posts */}
      
    </div>
  );
};

export default Home;

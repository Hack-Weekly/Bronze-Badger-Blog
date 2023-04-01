import React from 'react';
import Header from '../../components/Home/Header';
import Login from '../../components/Home/Login/Login';
import Register from '../../components/Home/Register/Register';

const Home = () => {
  return (
    <div>

      {/* Header */}
      <Header />

      {/*Register/LogIn*/}
      <div className="auth-container">
        <Login />
        <Register />
      </div>

      {/* Search Bar */}

      {/*Navigation*/}

      {/* Blog List*/}
      
      {/*Empty List */}

    </div>
  );
};

export default Home;

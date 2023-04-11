import React, { useState } from 'react';
import "./loginStyles.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {  // folders can change, depends what we choose 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      console.log(data);
      // successful login (needs implementation)
    } catch (error) {
      console.error(error);
      // login error (needs implementation)
    }
  };

  return (
    <form onSubmit={handleLogin} className='loginStyle'>
      
      <h2>Login:</h2>

      <label className='loginEmailStyle'>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label className='passwordStyle'>
        Password:
        <div>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      </label>

      <button type="submit">Login</button>

    </form>
  );
};

export default Login;

import React, { useState } from 'react';
import EyeOpen from '../../../assets/images/eye.svg'
import EyeClosed from '../../../assets/images/eye-slash.svg'

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
    <form
      className="login-form"
      onSubmit={handleLogin}>
        <input
          id="login-email"
          className="form-field"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
        <span className="input-container">
          <input
            id="login-password"
            className="form-field"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img
            src={showPassword ? EyeClosed : EyeOpen}
            alt={showPassword ? "Hide password" : "Show password"} 
            onClick={() => setShowPassword(!showPassword)}
          />
        </span>
        </div>
      <button
        type="submit"
        className="form-field"
        >Login</button>
    </form>
  );
};

export default Login;
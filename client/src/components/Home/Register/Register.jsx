import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/register', {  // folders can change depends what we choose
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });
      const data = await response.json();
      console.log(data);
      // successful registration (needs implementation)
    } catch (error) {
      console.error(error);
      // registration error (needs implementation)
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={toggleShowPassword}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </label>
      <label>
        Confirm Password:
        <div className="password-field">
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="button" onClick={toggleShowConfirmPassword}>
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
        </div>
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;

import React, { useState } from 'react';
import Info from '../../../assets/images/info.svg'
import EyeOpen from '../../../assets/images/eye.svg'
import EyeClosed from '../../../assets/images/eye-slash.svg'

const strengthLabels = ["weak", "medium", "strong"];

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [strength, setStrength] = useState("");

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

  const getStrength = (password) => {
    console.log(password);

    let strengthIndicator = -1;

    let upper = false,
      lower = false,
      numbers = false;

    for (let index = 0; index < password.length; index++) {
      let char = password.charCodeAt(index);
      if (!upper && char >= 65 && char <= 90) {
        upper = true;
        strengthIndicator++;
      }

      if (!numbers && char >= 48 && char <= 57) {
        numbers = true;
        strengthIndicator++;
      }

      if (!lower && char >= 97 && char <= 122) {
        lower = true;
        strengthIndicator++;
      }
    }

    setStrength(strengthLabels[strengthIndicator] ?? "");
  };

  const handleChange = (e) => {
    console.log(strength)
    console.log(e.currentTarget.id)
    switch(e.currentTarget.id) {
      case "register-name":
        setName(e.target.value)
        break;
      case "register-email":
        setEmail(e.target.value)
        break;
      case "register-password":
        setPassword(e.target.value);
        getStrength(e.target.value);
        break;
      case "register-confirm-password":
        setConfirmPassword(e.target.value)
        break;
      default:
        return
      }
  }

  return (
    <form 
      className="register-form"
      onSubmit={handleRegister}>
          <span className="input-container"><input
          id="register-name"
          className="form-field"
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleChange}
        /><img src={Info} alt="Only alphanumeric characters are allowed."/></span>
        <input
          id="register-email"
          className="form-field"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
          <span className="input-container">
            <input
            id="register-password"
            className="form-field"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
          <img
            src={showPassword ? EyeClosed : EyeOpen}
            alt={showPassword ? "Hide password" : "Show password"} 
            onClick={toggleShowPassword}
            />
        </span>
          <span className="input-container">
            <input
              id="register-confirm-password"
              className="form-field"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={handleChange}
            />
            <img
              src={showConfirmPassword ? EyeClosed : EyeOpen}
              alt={showConfirmPassword ? "Hide password" : "Show password"}
              onClick={toggleShowConfirmPassword}
              />
              
              </span>
              <section className={`bars ${strength}`}>
          <div></div>
        </section>
        <section className="strength">{strength && <>{strength} password</>}</section>
      <button
        className="form-field"
        type="submit">Register</button>
    </form>
  );
};

export default Register;

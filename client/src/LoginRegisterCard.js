import React, {useState} from 'react'
import Login from './components/Home/Login/Login'
import Register from './components/Home/Register/Register'

const LoginRegisterCard = () => {
    const [register, setRegister] = useState(false)

    const handleClick = (e) => {
        if (e.currentTarget.id === "login-form-heading-login") { 
    setRegister(false)
    document.getElementById("register-form-heading-register").classList.remove("active")
    } 
    else {
        setRegister(true);
        document.getElementById("login-form-heading-login").classList.remove("active");
    }
    e.currentTarget.classList.add("active")
    }
    
    return(
        <section className="login-card">
        <section className="form-heading">
            <div 
                id="login-form-heading-login"
                className="active"
                onClick={handleClick}><h1>Login</h1></div>
            <div 
                id="register-form-heading-register"
                pointer="cursor"
                onClick={handleClick}><h1>Register</h1></div>
        </section>
     {register? <Register />:<Login />}
        </section>
        )
}

export default LoginRegisterCard;
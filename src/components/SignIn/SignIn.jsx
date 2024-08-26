import React from 'react';
import { Link } from 'react-router-dom';
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './SignIn.css'
const SignIn = () => {

    const container = document.getElementById('container');

  return (
    <div className='wrapper' >

        <div className="container" id="container">
        <div className="form-container sign-up">
            <form>
            <h1>Create Account</h1>
            <div className="social-icons">
                <Link to="#" className="icon"><FaGooglePlusG /></Link>
                <Link to="#" className="icon"><FaFacebookF /></Link>
                <Link to="#" className="icon"><FaGithub /></Link>
                <Link to="#" className="icon"><FaLinkedinIn /></Link>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in">
            <form>
            <h1>Sign In</h1>
            <div className="social-icons">
                <Link to="#" className="icon"><FaGooglePlusG /></Link>
                <Link to="#" className="icon"><FaFacebookF /></Link>
                <Link to="#" className="icon"><FaGithub /></Link>
                <Link to="#" className="icon"><FaLinkedinIn /></Link>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link to="#">Forget Your Password?</Link>
            <button type="submit">Sign In</button>
            </form>
        </div>
        <div className="toggle-container">
            <div className="toggle">
            <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button onClick={(e)=>(container.classList.add("active"))} className="visible " id="login">Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
                <h1>Hello, Friend!</h1>
                <p>Register with your personal details to use all of site features</p>
                <button onClick={(e)=>(container.classList.remove("active"))} className= "visible" id="register">Sign Up</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default SignIn ;

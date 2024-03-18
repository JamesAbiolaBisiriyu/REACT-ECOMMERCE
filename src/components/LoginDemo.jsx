import React, { useContext, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { initializeApp } from "firebase/app";
import { AuthContext } from "../context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
const title = 'Login'
const socialTitle = 'Login with Social Media '
const btnText = 'Login Now'

const socialList = [
  { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
  { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
  { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
  { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
  { iconName: "icofont-pinterest", siteLink: "#", className: "pinterest" },
];

const provider = new GoogleAuthProvider();


const LoginDemo = () => {
const [erorrMessage, setErorrMessage] = useState('');
// const { LoginDemo} = useContext(AuthContext)
const location = useLocation();
const navigate = useNavigate();

const from = location.state?.from?.pathname || '/';

  const auth = getAuth();

  const handleLogin = () => {
    console.log("Btn Clicked");
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        alert("Login Successfully Done!");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });

  };
  return (
    <div className="login-section padding-tb section-bg">
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>
          <form className="account-form" onSubmit={handleLogin}>
            <div className="form-group">
              <input type="email" name="email" id="email" placeholder="Email Address *" required />
            </div>
            <div className="form-group">
              <input type="password" name="password" id="password" placeholder="password *" required />
            </div>
            <div className="form-group">
              <div className="d-flex justify-content-between flex-wrap pt-sm-2 ">
                <div className="checkgroup">
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <Link to='/forgotpass'>Forgot Password?</Link>
              </div>
            </div>
            <div className="form-group">
                <button type="submit" className="d-block lab-btn">
                  <span>{btnText}</span>
                </button>
            </div>
          </form>
          {/* account button */}
          <div className="account-bottom">
            <span className="d-block cate pt-10">
              Don’t have an Account? <Link to='/sign-up'>Sign Up</Link>
              </span>
              <span className="or">
                <span>Or</span>
              </span>
          </div>
        {/* <button className="bg-primary px-4 text-white " onClick={handleLogin}> */}
        {/* Login */}
      {/* </button> */}
        </div>      
      </div>     
    </div>
  );
};

export default LoginDemo;

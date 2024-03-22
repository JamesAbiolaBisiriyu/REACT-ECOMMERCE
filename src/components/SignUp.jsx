import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import { AuthContext } from "../context/AuthProvider";


const title = "Register ";
const socialTitle = "Login with Social Media ";
const btnText = "Signup Now";


const SignUp = () => {
  const [erorrMessage, setErorrMessage] = useState("");
  const {signUpWithGmail, createUser}=useContext(AuthContext);
const location = useLocation();
const navigate = useNavigate();

const from = location.state?.from?.pathname || '/';


  const handleRegister = ()=> {
    signUpWithGmail().then((result) => {
      const user = result.user;
      navigate(from, {replace: true}) 
    }) .catch((error) => {
      const errorMsg = error.message;
      setErorrMessage('Please Provide Valid Email & Password');
     
    })
  }
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form);
    const  email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    // console.log(email,password, confirmPassword);
    if(password !== confirmPassword){
      setErorrMessage('Password Does Not Match! Please, Provide A Correct Password')
    }
    else{
      setErorrMessage('');
      createUser( email, password).then((userCredential) => {
        const user = userCredential.user;
        alert('Account Created Successfully Done')
        navigate(from, {replace: true} )
      } ).catch((error)=> {
        console.log(error.message);
        alert(`${error.message}`)
      })
    }
  };
  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handleSignUp}>
            <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="Password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password *"
                  required
                />
              </div>
              {/* showing message */}
              <div>
                {erorrMessage && (
                  <div className="error-message text-danger mb-1">
                    {erorrMessage}
                  </div>
                )}
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
                Have An Account? <Link to="/login">Log In</Link>
              </span>
              <span className="or">
                <span>Or</span>
              </span>

              {/* social media login */}
              <h5 className="subtitle">{socialTitle}</h5>
              <ul className="lab-ul social-icons justify-content-center ">
                <li>
                  <button className="github" onClick={handleRegister}>
                    <i className="icofont-github"></i>
                  </button>
                </li>
                <li>
                  <a href="/" className="facebook">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="twitter">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="linkedin">
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="instagram">
                    <i className="icofont-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* <button className="bg-primary px-4 text-white " onClick={handleLogin}> */}
            {/* Login */}
            {/* </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

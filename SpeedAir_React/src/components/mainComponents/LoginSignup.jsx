import React, { useState } from 'react';
import '../../assets/styles/mainStyles/Login.css';

function LoginSignup() {

  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      {isLogin ? (
        <div className="login-container">
          <h1 className="auth-title">Log<span>In</span></h1>
          <form className="auth-form">
            <div className="input-group">
              <span className="input-icon">👤</span>
              <input type="text" placeholder="Username" className="auth-input" />
            </div>
            <div className="input-group">
              <span className="input-icon">🔑</span>
              <input type="password" placeholder="Password" className="auth-input" />
            </div>
            <button type="submit" className="auth-button">LogIn</button>
          </form>
          <div className="help-links">
            <p>Need help with your <a href="#username">username</a> or <a href="#password">password</a>?</p>
          </div>
          <div className="toggle-box">
            <p>New to our online services?</p>
            <button className="toggle-button" onClick={toggleForm}>SignUp</button>
          </div>
        </div>
      ) : (
        <div className="register-container">
          <h1 className="auth-title">Sign<span>Up</span></h1>
          <form className="auth-form">
            <div className="input-group">
              <span className="input-icon">👤</span>
              <input type="text" placeholder="Username" className="auth-input" />
            </div>
            <div className="input-group">
              <span className="input-icon">✉️</span>
              <input type="email" placeholder="Email" className="auth-input" />
            </div>
            <div className="input-group">
              <span className="input-icon">🔑</span>
              <input type="password" placeholder="Password" className="auth-input" />
            </div>
            <button type="submit" className="auth-button">SignUp</button>
          </form>
          <div className="toggle-box">
            <p>Already have an account?</p>
            <button className="toggle-button" onClick={toggleForm}>LogIn</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;

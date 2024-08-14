import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../AuthContext';
import '../../assets/styles/mainStyles/Login.css';

function LoginSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [userType, setUserType] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', {
        name:username, 
        email:email,
        password:password,
        role:userType
      });
      const { token } = response.data;
      sessionStorage.setItem('authToken', token);
      login(userType);
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="register-container">
          <h1 className="auth-title">Log<span>In</span></h1>
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="input-group">
              <span className="input-icon">👤</span>
              <input
                type="text"
                placeholder="Username"
                className="auth-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <span className="input-icon">✉️</span>
              <input
                type="email"
                placeholder="Email"
                className="auth-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <span className="input-icon">🔑</span>
              <input
                type="password"
                placeholder="Password"
                className="auth-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <span className="input-icon">👤</span>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="auth-input"
                required
              >
                <option value="">Select User Type</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button type="submit" className="auth-button">Log In</button>
          </form>
        </div>
    </div>
  );
}

export default LoginSignup;

import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const contentType = response.headers.get("content-type");
        let token;
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          token = data.token;
        } else {
          token = await response.text();  // Assume plain text token if not JSON
        }
        localStorage.setItem('jwtToken', token);
        localStorage.setItem('userType', userType);
      console.log("Token:", token);
        console.log(token);
        if (userType === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      } else {
        alert('Login failed, please check your credentials!');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="register-container">
        <h1 className="auth-title">
          Log<span>In</span>
        </h1>
        <form className="auth-form" onSubmit={handleLogin}>
          <div className="input-group">
            <span className="input-icon">👤</span>
            <input
              type="text"
              placeholder="Username"
              className="auth-input"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <span className="input-icon">🔑</span>
            <input
              type="password"
              placeholder="Password"
              className="auth-input"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <span className="input-icon">👤</span>
            <select
              className="auth-input"
              required
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="">Select User Type</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="auth-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

import React, { useState, useEffect } from 'react';
import AdminHome from './AdminHome';
import MainHome from './MainHome';
import LoginSignup from './components/mainComponents/LoginSignup'; // Import the LoginSignup component
// import { useAuth } from './AuthContext';

const App = () => {
  const userType = "admin"

  // const { userType } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    if (userType) {
      setIsAuthenticated(true);
    }
  }, [userType]);

  return (
    <div>
      {!isAuthenticated ? <LoginSignup /> : (userType === 'admin' ? <AdminHome /> : <MainHome />)}
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import Dashboard from './dashboard'; // Import the Dashboard component

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle form submission for email and password login
  const handleEmailPasswordLogin = (e) => {
    e.preventDefault();
    // For simplicity, we'll set isLoggedIn to true directly without validation
    setIsLoggedIn(true);
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <Dashboard /> // Render Dashboard component if user is logged in
      ) : (
        <>
          <h2>Login</h2>
          {/* Form for email and password login */}
          <form onSubmit={handleEmailPasswordLogin}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                required // Make email field required
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                required // Make password field required
              />
            </div>
            <button type="submit" className="btn-login">Login with Email</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;

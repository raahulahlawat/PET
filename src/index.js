import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import './index.css'; // Import your global CSS file
import Login from './login'; // Import the login component with lowercase file name
import './login.css';
import Dashboard from './dashboard'; // Import the Dashboard component
import './dashboard.css';
import './navbar.css';
import Home from './home'; // Import the Home component
import About from './about'; // Import the About component
import Contact from './contact'; // Import the Contact component
import reportWebVitals from './reportWebVitals';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Your login logic goes here
    setIsLoggedIn(true);
  };

  return (
    <Router> {/* Wrap your App component with Router */}
      <div>
        {!isLoggedIn && <Login onLogin={handleLogin} />} {/* Show login page if not logged in */}
        {isLoggedIn && (
          <>
            <Dashboard />
            <Home />
            <About />
            <Contact />
          </>
        )} {/* Show dashboard and pages if logged in */}
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

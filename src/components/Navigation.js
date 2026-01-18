import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          김재혁 · FULL-STACK & AI
        </Link>
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/fullstack" 
            className={`nav-link ${location.pathname === '/fullstack' ? 'active' : ''}`}
          >
            Fullstack
          </Link>
          <Link 
            to="/ai" 
            className={`nav-link ${location.pathname === '/ai' ? 'active' : ''}`}
          >
            AI
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;



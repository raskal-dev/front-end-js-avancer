import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Menu2 = () => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Autorisation TP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
              aria-current="page"
              to="/"
              onClick={() => handleClick('/')}
            >
              <i className="fa-solid fa-house"></i> Home
            </Link>
            <Link
              className={`nav-link ${activeLink === '/operateur' ? 'active' : ''}`}
              to="/operateur"
              onClick={() => handleClick('/operateur')}
            >
              <i className="fa-solid fa-users"></i> Operateur
            </Link>
            <Link className={`nav-link ${activeLink === '/plus' ? 'active' : ''}`} to="/plus">
              <i className="fa-solid fa-circle-info"></i> Plus
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu2;

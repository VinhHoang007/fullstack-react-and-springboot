import React from 'react';
import './App.css';

function App() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-color py-3">
      <div className="container-fluid">
        <span className="navbar-brand">Luv 2 Read</span>
        <button className="navbar-toggler" type='button' data-bs-toggler='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle Navigation'>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className='nav-link' href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className='nav-link' href="#">Search Books</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default App;

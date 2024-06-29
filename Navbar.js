import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-danger shadow">
          <div className="container-fluid">
              <Link to="/" className="nav-link active text-light me-3 ">Home</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-3 mb-lg-0">
                      <li className="nav-item">
                          <Link to="/login" className="nav-link active text-light me-3">Login</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/cart" className="nav-link active text-light me-3">Cart</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/additems" className="nav-link active text-light me-3">Add Items</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/register" className="nav-link active text-light me-3">Register</Link>
                      </li>
                  </ul>
                  <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Type Here" aria-label="Search" />
                      <button className="btn btn-outline custom-search-button" type="submit" style={{ backgroundColor: "white" }}>Search</button>
                  </form>
              </div>
          </div>
      </nav>
  );
}


export default Navbar;

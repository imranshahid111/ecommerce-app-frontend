import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
const state = useSelector((state)=>state.handleCart)


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">LA Collection</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="d-flex place-item-center collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <div className='buttons'>
            <Link to='/login' className='btn btn-outline-dark'><i className="fa-solid fa-right-to-bracket me-1"></i>Login</Link>
            <Link to='/signup' className='btn btn-outline-dark ms-2'><i className="fa fa-user-plus me-1"></i>Signup</Link>
            <Link  className='btn btn-outline-dark ms-2'><i className="fa fa-shopping-cart me-1"></i>Cart {state.length}</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

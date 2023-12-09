import React from "react";
import { Link } from "react-router-dom";

import logo from "../../imgs/PetsChoice/logo/pets-logo-transparent.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-logo">
          <Link to="">
            <img src={logo} alt="Logo" className="header-logo-img" />
          </Link>
        </div>
        <div className="header-sb">
          <form>
            <input placeholder="Search..." />
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <div className="header-auth">
          <Link to="#/" className="header-auth-link">
            Sign In
          </Link>
          <Link to="#/" className="header-cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </div>
      <div className="header-links">
        <Link to="brands">Brands</Link>
        <Link to="pet">Pets</Link>
        <Link to="sales">Sales</Link>
        <Link to="featured">Featured</Link>
        <Link to="help">Help</Link>
        <Link to="stores">Stores</Link>
      </div>
    </div>
  );
}

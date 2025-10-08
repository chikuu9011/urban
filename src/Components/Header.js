import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-container shadow-sm">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Logo + Nav (left side) */}
          <div className="col-6 d-flex align-items-center">
            <div className="let-logo me-3">
              <p className="ub-logo">UC</p>
              <div className="ub-text">
                <strong>
                  <p className="mb-0">
                    <span>urban</span> <br /> company
                  </p>
                </strong>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="d-none d-md-block">
              <ul className="d-flex list-unstyled mb-0">
                <li className="ms-3">
                  <Link to="/" className="menu-link">
                    homes
                  </Link>
                </li>
                <li className="ms-3">
                  <Link to="/beauty" className="menu-link">
                    beauty
                  </Link>
                </li>
                <li className="ms-3">
                  <Link to="/native" className="menu-link">
                    native
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right section (desktop + mobile) */}
          <div className="col-6 d-flex justify-content-end align-items-center">
            {/* Desktop only */}
            <div className="d-none d-md-flex align-items-center">
              <select className="header-select me-2">
                <option value="">-- location --</option>
                <option value="opt1">Pune</option>
                <option value="opt2">Mumbai</option>
                <option value="opt3">Pimpri</option>
                <option value="opt4">Delhi</option>
                <option value="opt5">Nagpur</option>
              </select>

              <input
                name="search"
                placeholder="search"
                className="me-3 search-bar"
              />
            </div>

            {/* Cart/Profile Icons */}
            <div className="menu-cart me-2">
              <Link to="/cart">
                <img
                  src="images/cart.svg"
                  alt="cart"
                  className="img-fluid"
                />
              </Link>
            </div>
            <div className="menu-cart me-2">
              <Link to="#">
                <img
                  src="images/material-symbols--person-outline.svg"
                  alt="profile"
                  className="img-fluid"
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="btn btn-outline-dark d-md-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="row d-md-none mt-2">
            <div className="col-12 text-center">
              <ul className="list-unstyled mb-3">
                <li className="py-2">
                  <Link to="/" className="menu-link" onClick={() => setIsOpen(false)}>
                    homes
                  </Link>
                </li>
                <li className="py-2">
                  <Link to="/beauty" className="menu-link" onClick={() => setIsOpen(false)}>
                    beauty
                  </Link>
                </li>
                <li className="py-2">
                  <Link to="/native" className="menu-link" onClick={() => setIsOpen(false)}>
                    native
                  </Link>
                </li>
              </ul>

              {/* Mobile inputs inside menu */}
              <div className="px-3">
                <select className="form-select mb-2">
                  <option value="">-- location --</option>
                  <option value="opt1">Pune</option>
                  <option value="opt2">Mumbai</option>
                  <option value="opt3">Pimpri</option>
                  <option value="opt4">Delhi</option>
                  <option value="opt5">Nagpur</option>
                </select>

                <input
                  type="text"
                  placeholder="search"
                  className="form-control mb-3"
                />


              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

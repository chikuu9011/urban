import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./CSS/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      try {
        const user = JSON.parse(userCookie);
        setUserName(user.name);
      } catch (err) {
        console.error("Invalid cookie format");
      }
    }
  }, []);

  return (
    <header className="header-container shadow-sm">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Logo + Nav */}
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

            <nav className="d-none d-md-block">
              <ul className="d-flex list-unstyled mb-0">
                <li className="ms-3">
                  <Link to="/" className="menu-link">homes</Link>
                </li>
                <li className="ms-3">
                  <Link to="/beauty" className="menu-link">beauty</Link>
                </li>
                <li className="ms-3">
                  <Link to="/native" className="menu-link">native</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Section */}
          <div className="col-6 d-flex justify-content-end align-items-center">
            {/* Desktop search */}
            <div className="d-none d-md-flex align-items-center">
              <select className="header-select me-2">
                <option value="">-- location --</option>
                <option value="opt1">Pune</option>
                <option value="opt2">Mumbai</option>
                <option value="opt3">Pimpri</option>
                <option value="opt4">Delhi</option>
                <option value="opt5">Nagpur</option>
              </select>

              <input name="search" placeholder="search" className="me-3 search-bar" />
            </div>

            {/* Cart Icon */}
            <div className="menu-cart me-2">
              <Link to="/cart">
                <img src="images/cart.svg" alt="cart" className="img-fluid" />
              </Link>
            </div>

            {/* Profile Section */}
            <div className="menu-cart me-2 d-flex align-items-center">
              <Link to="/Login" className="d-flex align-items-center text-decoration-none">
                <img
                  src="images/material-symbols--person-outline.svg"
                  alt="profile"
                  className="img-fluid me-1"
                />

              </Link>

            </div>
            {userName && <span className="text-dark fw-semibold">{userName}</span>}
            {/* Mobile Menu Toggle */}
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
                  <Link to="/" className="menu-link" onClick={() => setIsOpen(false)}>homes</Link>
                </li>
                <li className="py-2">
                  <Link to="/beauty" className="menu-link" onClick={() => setIsOpen(false)}>beauty</Link>
                </li>
                <li className="py-2">
                  <Link to="/native" className="menu-link" onClick={() => setIsOpen(false)}>native</Link>
                </li>
              </ul>

              {/* Mobile Location/Search */}
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

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBarTop.css";
import { BiAlignLeft } from "react-icons/bi";
const NavBarTop = () => {
  const path = window.location.pathname;

  return (
    <div className="container">
      <nav class="navbar   navbar-expand-lg">
        <a class="navbar-brand" href="/">
          <h1>S</h1>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span style={{ color: "white" }} class="navbar-toggler-icon">
            <BiAlignLeft style={{ fontSize: "32px" }} />
          </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <Link to="/">
              <li class="nav-item">
                <NavLink exact className="nav-link h5" to="/">
                  Home
                </NavLink>
              </li>
            </Link>
            <Link to="/about">
              <li class="nav-item">
                <NavLink exact className="nav-link h5" to="/about">
                  About
                </NavLink>
              </li>
            </Link>
            <Link to="/works">
              <li class="nav-item">
                <NavLink exact className="nav-link h5" to="/works">
                  Works
                </NavLink>
              </li>
            </Link>
            <Link to="/blog">
              <li class="nav-item">
                <NavLink exact className="nav-link h5" to="/blog">
                  Blog
                </NavLink>
              </li>
            </Link>
            <Link to="/contact">
              <li class="nav-item">
                <NavLink exact className="nav-link h5" to="/contact">
                  Contact
                </NavLink>
              </li>
            </Link>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1NJW0e6-CK0JMo6bwyyBdW4xPFh9MWN3G/view?usp=sharing"
            >
              <button class="btn btn-outline-success">Resume</button>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBarTop;

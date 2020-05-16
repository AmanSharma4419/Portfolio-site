import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <Link to="/" class="navbar-item">
              Home
            </Link>

            <Link to="/about" class="navbar-item">
              About
            </Link>
            <Link to="/skills" class="navbar-item">
              Skills
            </Link>
            <Link to="/contact" class="navbar-item">
              Contact
            </Link>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">More</a>

              <div class="navbar-dropdown">
                <a
                  href="https://amansharmablog.netlify.app/"
                  class="navbar-item"
                >
                  Blog
                </a>
                <a href="https://github.com/AmanSharma4419" class="navbar-item">
                  Github
                </a>
                <a href="https://twitter.com/amansharma214" class="navbar-item">
                  Twitter
                </a>
                <a
                  href="https://www.linkedin.com/in/aman-sharma-b21b68196/"
                  class="navbar-item"
                >
                  Linkdien
                </a>

                <hr class="navbar-divider" />
                <a class="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <Link
                  to="/"
                  style={{ boxSizing: "border-box", padding: "3.5px" }}
                >
                  <h2 style={{ color: "black", fontFamily: "sans" }}>
                    AMAN SHARMA
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

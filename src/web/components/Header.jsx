import React from "react";
import "./styles/Header.scss";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="main-header">
      <nav className="nav-placeholder">
        <div className="container">
          <Link to="/" className="header-logo-link">
            <img
              src="https://lairesit.sirv.com/Tortoise/tortoise-logo-og.png"
              alt="Tortoise Logo"
              className="main-logo"
            />
          </Link>

          <button
            className="sandwich-btn"
            data-bs-target="#mobileMenu"
            data-bs-toggle="modal"
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>

          <ul id="header_menu" className="navbar">
            <li className="menu-item">
              <Link to="/">Home</Link>
            </li>
            <li className="menu-item">
              <Link to="/events">Events</Link>
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#!" onClick={(e) => e.preventDefault()}>
                More <i className="fas fa-chevron-down fa-xs" />
              </a>
              <ul className="sub-menu">
                <li>
                  <Link to="/appeals">Ban Appeals</Link>
                </li>
                <li>
                  <Link to="/rules">Rules</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item menu-item-labs">
              <Link to="/labs">
                <i className="fas fa-flask labs-icon" /> Labs
              </Link>
            </li>

            <li className="login-actions">
              <Link to="/oauth" className="btn-action">
                <button className="btn btn-primary btn-sm">
                  <i className="fas fa-lock" /> Login to Studio
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {props.children}

      <div
        className="mobile-menu-modal modal fade"
        id="mobileMenu"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content mobile-menu">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul className="mobile-nav-list">
                <li>
                  <Link to="/" data-bs-dismiss="modal">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/labs"
                    data-bs-dismiss="modal"
                    className="labs-mobile-link"
                  >
                    Tortoise Labs <i className="fas fa-flask ms-2" />
                  </Link>
                </li>
                <li>
                  <Link to="/events" data-bs-dismiss="modal">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/rules" data-bs-dismiss="modal">
                    Rules
                  </Link>
                </li>
                <li>
                  <Link to="/contact" data-bs-dismiss="modal">
                    Contact
                  </Link>
                </li>
                <li className="mobile-cta">
                  <a
                    href="https://execute.tyxc.org"
                    className="btn btn-outline-primary w-100 mb-3"
                  >
                    Run Code
                  </a>
                  <a
                    href="https://tyxc.org/runtime/"
                    className="btn btn-primary w-100"
                  >
                    Invite Bot
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

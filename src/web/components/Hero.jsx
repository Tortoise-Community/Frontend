import React from "react";
import { Link } from "react-router-dom";
import "./styles/Hero.scss";

export default function HeroSection(props) {
  return (
    <div className="hero-master-container">
      <div className="container hero-content-grid">
        <div className="hero-brand-card">
          {/* <img
            src="https://lairesit.sirv.com/Tortoise/tortoise-logo.png"
            alt="Tortoise Logo"
            className="main-logo"
          /> */}

          <h1 className="main-title">
            <span>Tortoise Programming </span>Community
          </h1>
          <div className="brand-badge">EST. 2019</div>

          <p className="main-quote">
            "We called him tortoise because he taught us!"
          </p>

          <div className="main-actions">
            <a
              className="btn btn-join"
              href="https://discord.gg/WeUtJ7hqum"
              target="_blank"
              rel="noopener noreferrer"
            >
              JOIN OUR COMMUNITY
            </a>

            <div className="social-minimal-dock">
              <Link to="/github">
                <i className="fa-brands fa-github"></i>
              </Link>
              <a
                href="https://execute.tyxc.org"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-terminal"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-system-blade">
          <div className="blade-header">
            <span className="mono-text">OUR SERVICES</span>
          </div>

          <div className="system-links">
            <a href="https://runtime-bot.tyxc.org" className="system-card">
              <div className="card-top">
                <span className="system-tag">HERMES ENGINE</span>
                <i className="fa-brands fa-discord"></i>
              </div>
              <h3>Runtime Bot</h3>
              <p>Discord bot for executing code inside discord via commands.</p>
              <div className="card-status">
                <div className="dot green"></div> Online
              </div>
            </a>
            <a href="https://execute.tyxc.org" className="system-card">
              <div className="card-top">
                <span className="system-tag">HERMES ENGINE</span>
                <i className="fa-solid fa-terminal"></i>
              </div>
              <h3>Code Engine</h3>
              <p>An online code compiler for practising Leetcode and DSA.</p>
              <div className="card-status">
                <div className="dot green"></div> Online
              </div>
            </a>
            <Link to="/api" className="system-card">
              <div className="card-top">
                <span className="system-tag">HERMES ENGINE</span>
                <i className="fa-solid fa-microchip"></i>
              </div>
              <h3>Execution API</h3>
              <p>
                An industrial grade code execution API provided free for use.
              </p>
              <div className="card-status">
                <div className="dot green"></div> Online
              </div>
            </Link>
            <a href="https://studio.tyxc.org" className="system-card">
              <div className="card-top">
                <span className="system-tag">PLATFORM</span>
                <i className="fa-solid fa-code"></i>
              </div>
              <h3>Code Studio</h3>
              <p>
                An open-source community driven platform for learning DS-Algo.
              </p>
              <div className="card-status yellow">
                <div className="dot yellow"></div> Coming Soon
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="child-container">{props.children}</div>
    </div>
  );
}

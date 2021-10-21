import React from 'react';

import test from "../logo.svg";
import "./styles/Footer.css";

export default function Footer(){
    return (


        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-widget">
                        <div className="social">
                            <a href="/" className="custom-logo-link" rel="home">
                                <img width="462" height="84" src={test} className="custom-logo" alt="Footer Logo" loading="lazy"/>
                            </a>
                            <ul>
                                <li>
                                    <a href="/" target="_blank">
                                        <i className="fab fa-youtube"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" target="_blank">
                                        <i className="fab fa-youtube"/>
                                    </a>
                                </li>                                
                            </ul>
                        </div>
                    </div>
                    <div className="footer-widget contact-links">
                        <ul>
                            <li>
                                Services
                            </li>
                            <li>
                                <i className="bi bi-file-binary"/>
                                <div className="details">
                                    <span>Pastebin</span>
                                </div>
                            </li>
                            <li>
                                <i className="bi bi-cpu"/>
                                <div className="details">
                                    <span>API</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-widget footer-nav-links">
                        <ul>
                            <li>
                                Latest News
                            </li>
                            <li>
                                <a href="/">Test </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-widget">
                        <ul id="footer_left" className="menu">
                            <li>About</li>
                            <li className="menu-item"><a href="/"><span className="title">Code of Conduct</span></a></li>
                            <li className="menu-item"><a href="/"><span className="title">Privacy Policy</span></a></li>
                        </ul>
                    </div>
                    <div className="footer-widget">
                        <ul id="footer_right" className="menu">
                            <li>Menu</li>
                            <li className="menu-item"><a href="/"><span className="title">Home</span></a></li>
                            <li className="menu-item"><a href="/"><span className="title">Events</span></a></li>
                            <li className="menu-item"><a href="/"><span className="title">Contact</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="container">
                    <div className="back-to-top">
                        <i className="fas fa-angle-up"/>
                    </div>
                    <div className="copyright">
                        <p>
                            <a href="/">Tortoise Community</a>
                             All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>


)
}
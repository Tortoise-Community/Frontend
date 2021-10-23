import React from 'react';

import test from "../logo.svg";
import "./styles/Footer.css";
import {Link} from "react-router-dom";

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
                                <i className="bi bi-file-text"/>
                                <a href="#!">
                                    <div className="details">
                                        <span>Pastebin</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <i className="bi bi-cpu"/>
                                <a href="#">
                                    <div className="details">
                                        <span>API</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-widget">
                        <ul className="menu">
                            <li>About</li>
                            <li className="menu-item"><a href="/rules"><span className="title">Rules</span></a></li>
                            <li className="menu-item"><a href="/privacy-policy"><span className="title">Privacy Policy</span></a></li>
                            <li className="menu-item"><a href="/code-of-conduct"><span className="title">Code of Conduct</span></a></li>
                        </ul>
                    </div>
                    <div className="footer-widget">
                        <ul className="menu">
                            <li>Menu</li>
                            <li className="menu-item"><Link to="/"><span className="title">Home</span></Link></li>
                            <li className="menu-item"><Link to="/events"><span className="title">Events</span></Link></li>
                            <li className="menu-item"><Link to="/about"><span className="title">About</span></Link></li>
                            <li className="menu-item"><Link to="/contact"><span className="title">Contact</span></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="container">
                    <a href="#">
                        <div className="back-to-top">
                            <i className="fas fa-angle-up"/>
                        </div>
                    </a>
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
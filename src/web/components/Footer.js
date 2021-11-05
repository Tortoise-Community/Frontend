import React from 'react';

import logo from "../../logo.png";
import "./styles/Footer.scss";
import { Link } from "react-router-dom";

export default function Footer(){
    return (

        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-widget">
                        <div className="social">
                            <a href="/" className="custom-logo-link" rel="home">
                                <img width="140" src={logo} className="custom-logo" alt="Footer Logo" loading="lazy"/>
                            </a>
                            {/*<ul>*/}
                            {/*    <li>*/}
                            {/*        <a href="/" target="_blank">*/}
                            {/*            <i className="fab fa-youtube"/>*/}
                            {/*        </a>*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <a href="/" target="_blank">*/}
                            {/*            <i className="fab fa-youtube"/>*/}
                            {/*        </a>*/}
                            {/*    </li>                                */}
                            {/*</ul>*/}
                        </div>
                    </div>
                    {/*<div className="footer-widget contact-links">*/}
                    {/*    <ul>*/}
                    {/*        <li>*/}
                    {/*            Services*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <i className="bi bi-file-text"/>*/}
                    {/*            <a href="#!">*/}
                    {/*                <div className="details">*/}
                    {/*                    <span>Pastebin</span>*/}
                    {/*                </div>*/}
                    {/*            </a>*/}
                    {/*        </li>*/}
                    {/*        /!*<li>*!/*/}
                    {/*        /!*    <i className="bi bi-cpu"/>*!/*/}
                    {/*        /!*    <a href="#">*!/*/}
                    {/*        /!*        <div className="details">*!/*/}
                    {/*        /!*            <span>API</span>*!/*/}
                    {/*        /!*        </div>*!/*/}
                    {/*        /!*    </a>*!/*/}
                    {/*        /!*</li>*!/*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                    {/*<div className="footer-widget">*/}
                    {/*    <ul className="menu">*/}
                    {/*        <li>About</li>*/}
                    {/*        <li className="menu-item"><a href="/rules"><span className="title">Rules</span></a></li>*/}
                    {/*        <li className="menu-item"><a href="/privacy-policy"><span className="title">Privacy Policy</span></a></li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                    <div className="footer-widget">
                        <ul className="menu">
                            <li>Menu</li>
                            <li className="menu-item"><Link to="/"><span className="title">Home</span></Link></li>
                            <li className="menu-item"><Link to="/events"><span className="title">Events</span></Link></li>
                            <li className="menu-item"><Link to="/rules"><span className="title">Rules</span></Link></li>
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
import React from 'react';
import logo from "../logo.svg";
import "./styles/Header.css";

export default function Header(){
    return (
        <header>
            <nav className="nav-placeholder">
                <div className="container">
                    <button className="sandwich-btn" data-target="#mobileMenu" data-toggle="modal">
                        <span/>
                        <span/>
                        <span/>
                    </button>

                    <a href="/" className="custom-logo-link" rel="home"><img width="462" height="84"
                                                                                     src={logo}
                                                                                     className="custom-logo"
                                                                                     alt="Logo" loading="lazy"/></a>
                    <ul id="header_menu" className="navbar">
                        <li
                            className="menu-item">
                            <a href="/"><span>Home</span></a></li>
                        <li
                            className="menu-item"><a
                            href="/"><span>Events</span></a></li>
                        <li
                            className="menu-item"><a
                            href="/"><span>About</span></a></li>
                        <li
                            className="menu-item"><a
                            href="/"><span>Contact</span></a></li>
                        <li
                            className="menu-item menu-item-has-children">
                            <a href="/"><span>More</span></a>
                            <ul className="sub-menu">
                                <li
                                    className="menu-item"><a
                                    href="/"><span>Rules</span></a></li>
                                <li
                                    className="menu-item"><a
                                    href="/"><span>Privacy</span></a></li>
                                <li
                                    className="menu-item"><a
                                    href="/"><span>Something else</span></a></li>
                            </ul>
                        </li>
                        <li className="login"><a className="btn btn-sm btn-login btn-primary"><i className={"fas fa-lock fa-sm"}/> login</a></li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4">
                    </div>
                    <div className="col-xl-7 col-lg-8">
                        <h1 className="text-uppercase front-header m-2">Tortoise Python Community</h1><br/>
                        <p className="front-quote m-2">"We called him Tortoise because he taught us!"</p>
                        <button className="btn btn-outline-primary m-2">Join now <i className="bi bi-arrow-right-square-fill"/></button>
                    </div>
                </div>
            </div>
            <div className="mobile-menu-modal modal fade in" id="mobileMenu" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content mobile-menu">
                        <button type="button" className="btnclose" data-dismiss="modal">&times;</button>

                        <div className="modal-body">
                            <ul id="mobile_menu" className="menu">
                                <li
                                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home">
                                    <a href="index.htm"><span>Home</span></a></li>
                                <li
                                    className="menu-item"><a
                                    href="/"><span>News</span></a></li>
                                <li
                                    className="menu-item"><a
                                    href="/"><span>Teams</span></a></li>
                                <li
                                    className="menu-item"><a
                                    href="/"><span>Sponsors</span></a></li>
                                <li
                                    className="menu-item"><a
                                    href="/"><span>About</span></a></li>
                                <li
                                    className="menu-item"><a
                                    href="/"><span>Tournaments</span></a></li>
                                <li
                                    className="menu-item"><a
                                    href="/"><span>Streams</span></a></li>
                                <li
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                    <a><span>More</span></a>
                                    <ul className="sub-menu">
                                        <li
                                            className="menu-item"><a
                                            href="/"><span>Matches</span></a></li>
                                        <li
                                            className="menu-item"><a
                                            href="/"><span>Gallery</span></a></li>
                                        <li
                                            className="menu-item"><a
                                            href="/"><span>Shop</span></a></li>
                                    </ul>
                                </li>
                                <li className="login"><a className={"btn btn-sm btn-login"}><i className="fas fa-lock fa-sm"/>&nbsp;&nbsp;login</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
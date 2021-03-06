import React from 'react';
import logo from "../../logo.png";
import "./styles/Header.scss";
import {Link} from "react-router-dom";

export default function Header(props){
    return (
        <header>
            <nav className="nav-placeholder">
                <div className="container">
                    <a className="sandwich-btn" data-bs-target="#mobileMenu" data-bs-toggle="modal">
                        <span/>
                        <span/>
                        <span/>
                    </a>

                    <a href="/" className="custom-logo-link" rel="home"><img width="180"
                                                                             src={logo}
                                                                             className="logo-img"
                                                                             alt="Logo" loading="lazy"/></a>
                    <ul id="header_menu" className="navbar">
                        <li className="menu-item">
                            <Link to="/"><span>Home</span></Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/events"><span>Events</span></Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/rules"><span>Rules</span></Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/contact"><span>Contact</span></Link>
                        </li>
                        {/*<li*/}
                        {/*    className="menu-item menu-item-has-children">*/}
                        {/*    <a href="#!"><span>More</span></a>*/}
                        {/*    <ul className="sub-menu">*/}
                        {/*        <li className="menu-item">*/}
                        {/*            <Link to="/rules"><span>Rules</span></Link>*/}
                        {/*        </li>*/}
                        {/*        <li className="menu-item">*/}
                        {/*            <Link to="/privacy-policy"><span>Privacy</span></Link>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</li>*/}
                        {/*<li className="login"><button className="btn-primary btn-login btn-sm"><i className={"fas fa-lock fa-sm"}/> login</button></li>*/}
                    </ul>
                </div>
            </nav>

            {props.children}

            <div className="mobile-menu-modal modal fade in" id="mobileMenu" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content mobile-menu">
                        <a type="button" className="btn-close" data-bs-dismiss="modal">&times;</a>

                        <div className="modal-body">
                            <ul id="mobile_menu" className="menu">
                                <li
                                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home">
                                    <Link to="/" data-bs-dismiss="modal"><span>Home</span></Link></li>
                                <li
                                    className="menu-item"><Link
                                    to="/events" data-bs-dismiss="modal"><span>Events</span></Link></li>
                                <li
                                    className="menu-item"><Link
                                    to="/rules" data-bs-dismiss="modal"><span>Rules</span></Link></li>
                                <li
                                    className="menu-item"><Link
                                    to="/contact" data-bs-dismiss="modal"><span>Contact</span></Link></li>
                                {/*<li*/}
                                {/*    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">*/}
                                {/*    <a><span>More</span></a>*/}
                                {/*    <ul className="sub-menu">*/}
                                {/*        <li*/}
                                {/*            className="menu-item"><a*/}
                                {/*            href="/"><span>Privacy</span></a></li>*/}
                                {/*        <li*/}
                                {/*            className="menu-item"><a*/}
                                {/*            href="/"><span>Rules</span></a></li>*/}
                                {/*    </ul>*/}
                                {/*</li>*/}
                                {/*<li className="login"><button className={"btn btn-primary btn-login btn-sm"}><i className="fas fa-lock fa-sm"/>&nbsp;&nbsp;login</button></li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
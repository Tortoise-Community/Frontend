import React from 'react';
import "./styles/Footer.scss";

export default function Footer() {
    return (
        <div className="footer">
            <div className="row">
                <div className="col">
                   <p className="text-white-50">Copyright {new Date().getFullYear()} Tortoise Community | All rights reserved</p>
                </div>
                <div className="col-auto">
                    <ul>
                        <li><a href="#" target="_blank">Discord</a></li>
                        <li><a href="#" target="_blank">Github</a></li>
                        <li><a href="#" target="_blank">Website</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
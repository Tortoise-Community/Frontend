import React from "react";

import "./styles/EventToolbar.scss";

export default function EventToolBar(){
    return (
        <div className="card">
            <div className="card-body">
                <ul className="event-icon-list">
                    <li>
                        <i className="bi bi-people"/>
                        <h6>34</h6>
                        <span>Signups</span>
                    </li>
                    <li>
                        <i className="bi bi-award-fill"/>
                        <h6>3</h6>
                        <span>Prizes</span>
                    </li>
                    <li>
                        <i className="bi bi-suit-diamond-fill"/>
                        <h6>3</h6>
                        <span>Perks</span>
                    </li>
                </ul>
            </div>
            <div className="card-footer bg-transparent">
                <h6 className="text-center">Sign up for the Event</h6>
                <button className="btn btn-primary w-100">Register</button>
            </div>
        </div>
    )
}
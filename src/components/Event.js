import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Event.scss'

export default function Event({title, slug, desc}) {
    return (
        <Link className="event-box border border-1" to={`/events/${slug}`}>
            <div className="event-body">
                <div className="col">
                    <h4>Halloween Codejam</h4>
                    <span className="date">Oct.20.2021 - Oct.31.2021</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="col">
                    <a className={"category"}>#CTF</a>
                    <a className={"category"}>#Programming</a>
                </div>
            </div>
            <div className="event-footer">
                <div className="col">
                    <div className="col-item">
                        <h5>Winner</h5>
                        <p>Ryuga</p>
                    </div>
                    <div className="col-item">
                        <h5>Prize pool</h5>
                        <p>Discord Nitro X 3 Months, 1 Core VPS</p>
                    </div>
                </div>
                <button className="btn btn-default text-uppercase">Participate <i className="fas fa-arrow-right"/></button>
            </div>
        </Link>
    )
}

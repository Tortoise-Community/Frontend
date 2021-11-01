import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Event.scss'

export default function Event({data}) {
    const renderParticipateBtn = () => {
        if(data.status==="Upcoming")
            return <button className="btn btn-default text-uppercase">Participate <i className="fas fa-arrow-right"/></button>
    }
    return (
        <Link className="event-box border border-1" to={`/events/${data.slug}`}>
            <div className="event-body">
                <div className="col">
                    <h4>{data.name}</h4>
                    <span className="date">{data.due_date} - {data.end_date}</span>
                    <p>{data.short_desc}</p>
                </div>
                <div className="col">
                    {
                        data.event_tags.map(tag => <a className={"category"}>#{tag}</a>)
                    }
                </div>
            </div>
            <div className="event-footer">
                <div className="col">
                    <div className="col-item">
                        <h5>Winner</h5>
                        <p>{data.winner_name}</p>
                    </div>
                    <div className="col-item">
                        <h5>Prize pool</h5>
                        <p>{data.prize}</p>
                    </div>
                </div>
                {renderParticipateBtn()}
            </div>
        </Link>
    )
}

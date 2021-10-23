import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Event.css'

function Event({title, slug, desc}) {
    return (
        <Link to={`/events/${slug}`}>
            <div className='flex container-fluid event mb-5 p-5 m-l-0 m-r-0'>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </Link>
    )
}

export default Event

import React from 'react'
import { useState } from 'react'
import Event from '../components/Event'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Events() {

    const [fakeEvents, setFakeEvents] = useState([
        {
            title: 'some title',
            slug: 'fake-event',
            desc: 'some desc',
            id: 1
        }
    ])

    return (
        <div>
            <Header>
                <div style={{ color: 'white' }} className='white'>
                    <h1>Events</h1>
                    <div>
                        {/* Event Mapping */}
                        {fakeEvents.map((fakeEvent) => (
                            <Event
                                {...fakeEvent}
                                key={fakeEvent.id}
                            />
                        ))}
                    </div>
                </div>
            </Header>
            <Footer/>
        </div>
    )
}

export default Events

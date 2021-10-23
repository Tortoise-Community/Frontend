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
            desc: 'lorem ipsum dolor sit amet and more words to pad out the word count because vscodes lorem ipsum isnt working',
            id: 1
        },
        {
            title: 'some title',
            slug: 'fake-event-2',
            desc: 'lorem ipsum dolor sit amet and more words to pad out the word count because vscodes lorem ipsum isnt working',
            id: 2
        }
    ])

    return (
        <div>
            <Header >
                <div style={{ color: 'white' }} className='white p-5'>
                    <h1 className='display-4 mb-2'>Events</h1>
                    <div className='flex mt-5' style={{ width: 'calc(80%)' }}>
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

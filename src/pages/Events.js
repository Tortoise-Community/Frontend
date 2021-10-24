import React from 'react'
import { useState } from 'react'
import Event from '../components/Event'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Section from "../components/Section";
function Events() {

    const [Events, setEvents] = useState([
        {
            title: 'some title',
            slug: 'fake-event',
            desc: 'lorem ipsum dolor sit amet and more words to pad out the word count because vscodes lorem ipsum isnt working',
            id: 1
        }
    ])

    return (
        <div>
            <Header/>
            <Section title={"Events"}>
                    <div className="row">
                        <div className="col-12-xl">
                            {Events.map((EventItem) => (
                                <Event
                                    {...EventItem}
                                    key={EventItem.id}
                                />
                            ))}
                        </div>
                    </div>
            </Section>

            <Footer/>
        </div>
    )
}

export default Events

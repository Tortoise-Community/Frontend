import React, {useEffect} from 'react'
import { useState } from 'react'
import Event from '../components/Event'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Section from "../components/Section";

import WebApiHandler from "../api/apiHandler";

const api = new WebApiHandler();

function Events() {

    const [Events, setEvents] = useState([
        {
            pk: 0,
            slug: "",
            name: "",
            short_desc: "",
            host_name: "",
            winner_name: "",
            prize: "",
            due_date: "",
            end_date: "",
            "event_tags": [],
        }
    ])

    useEffect( () => {
        const fetchData = async () => {
            const events = await api.getEvents();
            setEvents(events.data);
        };
        fetchData();
    }, [])
    return (
        <div>
            <Header/>
            <Section title={"Events"}>
                    <div className="row">
                        <div className="col-12-xl">
                            {Events.map((EventItem) => (
                                <Event
                                    data={EventItem}
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

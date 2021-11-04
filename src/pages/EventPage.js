import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Section from "../components/Section";
import EventToolBar from "../components/EventToolBar";

function EventPage() {

    const { slug } = useParams()

    return (
        <div>
            <Header/>
                <div className="container-xxl box-sizing-border-box">
                    <div className="row">
                        <div className="col-xl-8 col-lg-12 col-md-12">
                            <Section title={"Coding event"}>
                                <ReactMarkdown>

                                </ReactMarkdown>
                            </Section>
                        </div>
                        <div className="col-xl-4 col-lg-12 col-md-12 pt-5 mt-4">
                            <EventToolBar/>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default EventPage

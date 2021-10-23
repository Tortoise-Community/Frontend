import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

function EventPage() {

    const {slug} = useParams()

    return (
        <div>
            <Header>
                <div className='text-white'>
                    <ReactMarkdown>
                        # Hello *world*
                    </ReactMarkdown>
                </div>
            </Header>
            <Footer/>
        </div>
    )
}

export default EventPage

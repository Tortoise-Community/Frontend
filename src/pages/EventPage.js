import React from 'react'
import { useParams } from 'react-router-dom'

function EventPage() {

    const {slug} = useParams()

    return (
        <div>
            {slug}
        </div>
    )
}

export default EventPage

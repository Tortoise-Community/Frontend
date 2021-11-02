import React from 'react'

function ContactSections({ selectedOption }) {
    switch (selectedOption) {
        case 'none':
            return <></>
        case 'Report-User':
            return (
                <div id="user" className="row">
                    <div className="col-md-6">
                        <label>Username:</label>
                        <input className="form-control" type="text" placeholder="Ryuga_hideki" name="username"/>
                    </div>
                    <div className="col-md-6">
                        <label>Tag:</label>
                        <input className="form-control" type="text" name="tag" placeholder="#1234"
                                pattern="[#]{1}[1-9]{4}"/>
                    </div>
                </div>
            )
        case 'Issue-Report':
            return (
                <div id="issue" className="row">
                    <div className="col-md-12">
                        <label>Enter the issue: </label>
                        <input className="form-control" type="text" name="issue"/>
                    </div>
                </div>
            )
        case 'Sponsorship':
            return (
                <div id="sponsor">
                    <label>What would you like to sponsor:</label><br/>
                    <select name="sponsor-type" className="form-controly"
                            name="sponsor-type">
                        <option value="none" selected disabled hidden>--select--</option>
                        <option value="Coding-Event">Code Jam</option>
                        <option value="CTF-Event">CTF-Event</option>
                        <option value="Team-Events">Team-Event</option>
                        <option value="Project">Project</option>
                    </select>
                </div>
            )
        case 'Partnership':
            return (
                <div id="partner" className="row">
                    <div className="col-md-6">
                        <label>Server Name:</label>
                        <input className="form-control" type="text" placeholder="Tortoise" name="server-name"/>
                    </div>
                    <div className="col-md-6">
                        <label>Server Topic</label>
                        <input className="form-control" type="text" placeholder="Programmming " name="server-topic"/>
                    </div>
                    <div className="col-md-6">
                        <label>Invitaiton link</label>
                        <input className="form-control" type="text" placeholder="https://discord.gg/99SKwQd"
                                name="server-invite"/>
                    </div>
                </div>
            )
        case 'Appeal-Infraction':
            return <div>Appeal infraction</div>
        case 'Data-Deletion':
            return <div>Data Deletion</div>
        case 'Other':
            return (
                <div id="other"><br/>
                    <label>Enter the subject:</label>
                    <input className="form-control" type="text" placeholder="subject" name="othersub"/>
                </div>
            )
    }
}

export default ContactSections

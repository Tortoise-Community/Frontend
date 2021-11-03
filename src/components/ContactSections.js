import React, { useState } from 'react'

function ContactSections({ selectedOption, formData, setFormData }) {

    switch (selectedOption) {
        case 'none':
            return <></>
        case 'Report-User':
            return (
                <div id="user" className="row">
                    <div className="col-md-6">
                        <label>Username:</label>
                        <input 
                            className="form-control"
                            type="text"
                            placeholder="Ryuga_hideki" 
                            name="username" 
                            value={formData.ReportUser.reportedUsername} 
                            onChange={(e)=>setFormData({...formData, ReportUser: {
                                reportedUsername: e.target.value,
                                tag: formData.ReportUser.tag
                            }})}
                        />
                    </div>
                    <div className="col-md-6">
                        <label>Tag:</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            name="tag" 
                            placeholder="#1234"
                            pattern="[#]{1}[1-9]{4}"
                            value={formData.ReportUser.tag} 
                            onChange={(e)=>setFormData({...formData, ReportUser: { 
                                tag: e.target.value,
                                reportedUsername: formData.ReportUser.reportedUsername
                            }})}
                        />
                    </div>
                </div>
            )
        case 'Issue-Report':
            return (
                <div id="issue" className="row">
                    <div className="col-md-12">
                        <label>Enter the issue: </label>
                        <input 
                            className="form-control" 
                            type="text" 
                            name="issue"
                            value={formData.IssueReport} 
                            onChange={(e)=>setFormData({...formData, IssueReport: e.target.value})}
                        />
                    </div>
                </div>
            )
        case 'Sponsorship':
            return (
                <div id="sponsor">
                    <label>What would you like to sponsor:</label><br/>
                    <select 
                        name="sponsor-type" 
                        className="form-control"
                        value={formData.Sponsorship}
                        onChange={(e)=>{setFormData({...formData, Sponsorship: e.target.value})}}
                    >
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
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Tortoise" 
                            name="server-name" 
                            value={formData.Partnership.name}
                            onChange={(e)=>{setFormData({...formData, Partnership: {
                                name: e.target.value,
                                topic: formData.Partnership.topic,
                                invitation: formData.Partnership.invitation,
                            }})}}
                        />
                    </div>
                    <div className="col-md-6">
                        <label>Server Topic</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Programmming" 
                            name="server-topic"
                            value={formData.Partnership.topic}
                            onChange={(e)=>{setFormData({...formData, Partnership: {
                                name: formData.Partnership.name,
                                topic: e.target.value,
                                invitation: formData.Partnership.invitation,
                            }})}}
                        />
                    </div>
                    <div className="col-md-6">
                        <label>Invitation link</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="https://discord.gg/99SKwQd"
                            name="server-invite"
                            value={formData.Partnership.invitation}
                            onChange={(e)=>{setFormData({...formData, Partnership: {
                                name: formData.Partnership.name,
                                topic: formData.Partnership.topic,
                                invitation: e.target.value,
                            }})}}
                        />
                    </div>
                </div>
            )
        case 'Appeal-Infraction':
            return (
                <div id="user" className="row">
                    <div className="col-md-6">
                        <label>Username:</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Ryuga_hideki"
                            name="username"
                            value={formData.AppealInfraction.InfractedUsername}
                            onChange={(e)=>setFormData({...formData, AppealInfraction: {
                                    InfractedUsername: e.target.value,
                                    tag: formData.AppealInfraction.tag
                                }})}
                        />
                    </div>
                    <div className="col-md-6">
                        <label>Tag:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="tag"
                            placeholder="#1234"
                            pattern="[#]{1}[1-9]{4}"
                            value={formData.AppealInfraction.tag}
                            onChange={(e)=>setFormData({...formData, AppealInfraction: {
                                    tag: e.target.value,
                                    InfractedUsername: formData.AppealInfraction.InfractedUsername
                                }})}
                        />
                    </div>
                    <div className="col-md-12 mt-3">
                        <label>Infraction Applied:</label>
                        <select
                            className="form-control"
                            name="tag"
                            placeholder="Permanent Ban"
                            value={formData.AppealInfraction.InfractionApplied}
                            onChange={(e)=>setFormData({...formData, AppealInfraction: {
                                    tag: formData.AppealInfraction.tag,
                                    InfractedUsername: formData.AppealInfraction.InfractedUsername,
                                    InfractionApplied:  e.target.value
                                }})}>
                            <option value="none" selected disabled hidden>--select--</option>
                            <option value="Short Mute">Short Mute</option>
                            <option value="Long Mute">Long Mute</option>
                            <option value="Temporary Ban">Temporary Ban</option>
                            <option value="Permanent Ban">Permanent Ban</option>
                        </select>
                    </div>
                </div>
            )
        case 'Data-Deletion':
            return (
                <div id="user" className="row">
                    <div className="col-md-6">
                        <label>User ID:</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Ryuga_hideki"
                            name="username"
                            value={formData.DataDeletion.userID}
                            onChange={(e)=>setFormData({...formData, DataDeletion: {
                                    userID: e.target.value,
                                }})}
                        />
                    </div>
                </div>
            )
        case 'Other':
            return (
                <div id="other"><br/>
                    <label>Enter the subject:</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="subject" 
                        name="othersub" 
                        value={formData.other} 
                        onChange={(e)=>{setFormData({...formData, other: e.target.value})}}
                    />
                </div>
            )
    }
}

export default ContactSections

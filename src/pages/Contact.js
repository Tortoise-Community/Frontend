import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact(){
    return (
        <div>
            <Header/>
            <section>
                <div className="container box-sizing-border-box">
                    <div className="row">
                        <div className="col-lg-4">
                            <h4 className="comment-title">Tortoise Community</h4>
                            <p>A discord based community of/for programmers and developers focused around Python and Machine learning</p>
                            <div className="row">
                                <div className="col-md-9">
                                    <ul className="contact-info-list">
                                        <li>
                                            <div className="cf-left">E-mail</div>
                                            <div className="cf-right">tortoisecommunity@gmail.com</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="social-links">
                                <a href="https://github.com/Tortoise-Community" target="_blank"><i
                                    className="fa fa-github fa-lg"/></a>
                                <a href="https://www.reddit.com/user/Tortoise_Community" target="_blank"><i
                                    className="fa fa-reddit fa-lg "/></a>
                                <a href="https://twitter.com/PythonTortoise" target="_blank"><i
                                    className="fa fa-twitter"/></a>
                                <a href="https://www.youtube.com/channel/UCjx0JTXZWVd11edZY0aj63g" target="_blank"><i
                                    className="fa fa-youtube-play fa-lg"/></a>
                                <a href="https://www.facebook.com/Tortoise-Python-Community-103144314517830"
                                   target="_blank"><i className="fa fa-facebook fa-lg"/></a>
                                <a href="https://www.instagram.com/Tortoise_Python_Community/" target="_blank"><i
                                    className="fa fa-instagram fa-lg"/></a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="contact-form-warp">
                                <h4 className="comment-title">Reach Us</h4>
                                <form className="comment-form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input className="form-control" type="text" placeholder="Name" name="name" required/>
                                        </div>
                                        <div className="col-md-6">
                                            <input className="form-control" type="email" placeholder="Email"
                                                   pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" name="email"
                                                   required/>
                                        </div>
                                        <div className="col-lg-12 mt-3">
                                            <div className="form-group">
                                                <label htmlFor="seeAnotherField">Subject</label><br/>
                                                <select onChange="adjustContactForm(this.value)" className="form-control"
                                                        id="subjectx" name="subject" required>
                                                    <option value="none" selected disabled hidden> --select--</option>
                                                    <option value="Report-User">Report user</option>
                                                    <option value="Issue-Report">Report issue</option>
                                                    <option value="Sponsorship">Sponsor us</option>
                                                    <option value="Partnership">Partner up</option>
                                                    <option value="Appeal-Infraction">Appeal infraction</option>
                                                    <option value="Data-Deletion">Data Deletion</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div id="other" className="collapse"><br/>
                                                <label>Enter the subject:</label>
                                                <input className="form-control" type="text" placeholder="subject" name="othersub"/>
                                            </div>
                                            <div id="user" className="row collapse">
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
                                            <div id="infraction" className="row collapse">
                                                <div className="col-md-6">
                                                    <label>Infraction type:</label><br/>
                                                    <select name="infraction-type" className="form-controly">
                                                        <option value="none" selected disabled hidden> --select--
                                                        </option>
                                                        <option value="mute">Mute</option>
                                                        <option value="kick">Kick</option>
                                                        <option value="ban">Ban</option>
                                                    </select>
                                                </div>
                                                <br/>
                                                <div className="col-md-6">
                                                    <label>Date:</label><br/>
                                                    <input className="form-control" type="date" className="form-controly"
                                                           name="date"/><br/><br/>
                                                    <label>Reason:</label>
                                                    <input className="form-control" type="text" name="reason" placeholder="Violated T&C"/>
                                                </div>
                                            </div>
                                            <div id="sponsor" className="collapse">
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
                                            <div id="issue" className="row collapse">
                                                <div className="col-md-12">
                                                    <label>Enter the issue: </label>
                                                    <input className="form-control" type="text" name="issue"/>
                                                </div>
                                            </div>
                                            <div id="partner" className="row collapse">
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
                                            <br/>
                                            <textarea placeholder="Message" className="form-control" name="message"/>
                                            <br/>
                                            <button className="btn btn-outline-secondary" type="submit">Send</button>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
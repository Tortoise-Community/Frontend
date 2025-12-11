import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSections from "../sections/ContactSections";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Report-User");
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: name,
    email: email,
    subject: subject,
    message: message,
    ReportUser: {
      reportedUserName: "",
      tag: "",
    },
    IssueReport: "",
    Sponsorship: "",
    Partnership: {
      name: "",
      topic: "",
      invitation: "",
    },
    AppealInfraction: {
      InfractedUsername: "",
      tag: "",
      InfractionApplied: "",
    },
    DataDeletion: {
      userID: "",
    },
    Other: "",
  });

  return (
    <div>
      <Header />
      <section>
        <div className="container box-sizing-border-box">
          <div className="row">
            <div className="col-lg-4">
              <h4 className="comment-title">Tortoise Community</h4>
              <p>
                A discord based community of/for programmers and developers
                focused around Python and Machine learning
              </p>
              <div className="row">
                <div className="col-md-9">
                  <ul className="contact-info-list">
                    <li>
                      <div className="cf-left">E-mail</div>
                      <div className="cf-right">
                        tortoisecommunity@gmail.com
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-form-warp">
                <h4 className="comment-title">Reach Us</h4>
                <form className="comment-form">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Name"
                        name="name"
                        required
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-lg-12 mt-3">
                      <div className="form-group mb-3">
                        <label htmlFor="seeAnotherField">Subject</label>
                        <br />
                        <select
                          className="form-control"
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                        >
                          <option value="none" selected disabled hidden>
                            {" "}
                            --select--
                          </option>
                          <option value="Report-User">Report user</option>
                          <option value="Issue-Report">Report issue</option>
                          <option value="Sponsorship">Sponsor us</option>
                          <option value="Partnership">Partner up</option>
                          <option value="Appeal-Infraction">
                            Appeal infraction
                          </option>
                          <option value="Data-Deletion">Data Deletion</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <ContactSections
                        selectedOption={formData.subject}
                        formData={formData}
                        setFormData={setFormData}
                      />

                      <br />
                      <textarea
                        placeholder="Message"
                        className="form-control"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <br />
                      <button
                        className="btn btn-outline-secondary"
                        type="submit"
                        disabled={true}
                      >
                        Temporarily disabled
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

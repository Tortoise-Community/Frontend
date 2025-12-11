import React, { useEffect } from "react";
import { useState } from "react";
import Event from "../components/Event";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";

import WebApiHandler from "../../api/apiHandler";

const api = new WebApiHandler();

export default function Events() {
  const [loading, setLoading] = useState(true);

  const [Events, setEvents] = useState([
    {
      pk: 0,
      slug: "halloween-coding-event-2019",
      name: "Tortoise Halloween Coding Event ",
      short_desc: "Halloween coding event for the Tortoise Discord server",
      host_name: "@Braindead",
      winner_name: "@Leterax, @effyn",
      prize: "1 month Discord Nitro, Amnesia collection steam key",
      due_date: "01/12/19",
      end_date: "01/12/19",
      event_tags: ["#coding", "#halloween", "#leetcode", "#logic"],
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const events = await api.getEvents();
      setEvents(events.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <Section title={"Events"}>
        <div className="row">
          <div className="col-12-xl">
            {Events.map((EventItem) => (
              <Event data={EventItem} loading={loading} />
            ))}
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}

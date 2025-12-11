import React, { useState, useEffect } from "react";

import ProjectItem from "../components/ProjectItem";
import Section from "../components/Section";
import WebApiHandler from "../../api/apiHandler";

const api = new WebApiHandler();

export default function ProjectSection() {
  const [loading, setLoading] = useState();
  const [projects, setProjects] = useState([
    {
      stars: 57,
      commits: 732,
      forks: 21,
      language: "Python",
      name: "Tortoise-Bot",
      short_desc: "Fully functional Bot for Discord coded in Discord.py",
      github: "https://github.com/Tortoise-Community/Tortoise-Bot",
    },
    {
      stars: 8,
      commits: 573,
      forks: 1,
      language: "Python",
      name: "Backend",
      short_desc:
        "Website build with django for the Tortoise Community discord server",
      github: "https://github.com/Tortoise-Community/Backend",
    },
    {
      stars: 1,
      commits: 115,
      forks: 1,
      language: "React",
      name: "Frontend",
      short_desc: "React frontend for Tortoise Community Website",
      github: "https://github.com/Tortoise-Community/Frontend",
    },
  ]);
  useEffect(() => {
    //    const fetchData = async () => {
    //        const projects = await api.getProjects();
    //        setProjects(projects.data)
    //        setLoading(false)
    //    };
    //    fetchData();
    setLoading(false);
  }, []);
  return (
    <Section title={"Projects"}>
      <div className="row g-4">
        {projects.map((projectItem) => (
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <ProjectItem data={projectItem} loading={loading} />
          </div>
        ))}
      </div>
    </Section>
  );
}

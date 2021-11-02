import React, { useState, useEffect } from "react";

import ProjectItem from "../components/ProjectItem";
import Section from "../components/Section";
import WebApiHandler from "../api/apiHandler";

const api = new WebApiHandler();

export default function ProjectSection() {

   const [loading, setLoading] = useState(true)
   const [projects, setProjects] = useState(
       [
           {
               stars: 0,
               commits: 0,
               forks: 0,
               language: "",
               name: "",
               short_desc: "",
               github: ""
           }
       ]
   );
   useEffect( () => {
       const fetchData = async () => {
           const projects = await api.getProjects();
           setProjects(projects.data)
           setLoading(false)
       };
       fetchData();
   }, [])
   return (
       <Section title={"Projects"}>
            <div className="row g-4">
               {projects.map((projectItem) =>
                   (
                       <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                           <ProjectItem
                               data={projectItem} loading={loading}
                           />
                       </div>
                    )
               )
               }
           </div>
       </Section>
   )
}
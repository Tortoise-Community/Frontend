import React, { useState, useEffect } from "react";

import ProjectItem from "../components/ProjectItem";
import Section from "../components/Section";
import axios from 'axios';

export default function ProjectSection() {
   const [projects, setProjects] = useState(
       [
           {
               stars: 0,
               commits: 0,
               forks: 0,
               language: "",
               name: "",
               short_desc: "",
           }
       ]
   );

   useEffect( () => {
       const fetchData = async () => {
           const resp = await axios.get("http://www.tortoisecommunity.co:8000/projects/");
           setProjects(resp.data);
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
                               data={projectItem}
                           />
                       </div>
                       )
               )
               }
           </div>
       </Section>
   )
}
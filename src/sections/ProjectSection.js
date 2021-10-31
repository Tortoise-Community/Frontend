import React, { useState, useEffect } from "react";

import ProjectItem from "../components/ProjectItem";
import Section from "../components/Section";
import axios from 'axios';

export default function ProjectSection() {
   const [projects, setProjects] = useState([{stars: 0}]);

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
               {projects.map((projectItem) => <ProjectItem
               data={projectItem}
               />)
               }
           </div>
       </Section>
   )
}
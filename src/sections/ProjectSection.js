import React from "react";

import ProjectItem from "../components/ProjectItem";
import Section from "../components/Section";

export default function ProjectSection() {
   return (
       <Section title={"Projects"}>
           <div className="row g-4">
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
           </div>
       </Section>
   )
}
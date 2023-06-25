import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  //console.log(projects);
  

  const projectArr = projects.map(element =>{
    return (
      <ProjectItem
        key= {element.id}
        name = {element.name}
        about = {element.about}
        technologies = {element.technologies} 
        />
      )
  } )

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectArr}
      </div>
    </div>
  );
}

export default ProjectList;

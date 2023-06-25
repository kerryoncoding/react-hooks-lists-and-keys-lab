import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log({technologies})

  const tech = technologies.map( element => {
    return (
      <span key= {element}>{element}</span>
    )
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
          {tech}
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;

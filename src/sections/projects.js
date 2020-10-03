import React from "react";
import ProjectCard from "../components/projectCard";

export default function projects(props) {
  var i = 0;
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Projects Completed 👨🏼‍💻</h1>
        <div className="columns is-vcentered is-centered is-multiline is-mobile">
          {
            props.projects.map(project => {
              return (
                <div key={i++} className="column is-full-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen">
                  <ProjectCard
                    name={project.name} 
                    location={project.location}
                    description={project.description}
                    hashtags={project.hashtags}
                    image={project.image} 
                    link={project.link}
                  />
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  );
}

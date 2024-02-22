import React from "react";
import './code-section.css';
import { projectsList } from "../../containers/projects/Projects";
import Project from '../project/Project';

function CodeSection() {
    return (
        <div className="portfolio__codeSection section__width">
            <div className="portfolio__codeSection-container">
                {projectsList.react.projects.map((project, i) => {
                    return (
                    <Project title={project.title} backgroundImage={project.backgroundImage} description={project.description} link={project.link} key={project.title + i} />
                )})}
            </div>
        </div>
    )
}

export default CodeSection;
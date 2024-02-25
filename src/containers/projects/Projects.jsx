import React from 'react';
import portfolioImage from '../../assets/portfolio.png';
import gpt3 from '../../assets/gpt3.png';
import Project from '../../components/project/Project';
import './projects.css';

const projectsList = {
    projects: [ {
            title: "Portfolio",
            backgroundImage: portfolioImage,
            description: "My portfolio encapsulates my passion as a front-end fanatic and software engineering student. It features a personal introduction and showcases my most recent projects.",
            codeIn: "React JS",
            link: '#'
        },   
        {
            title: "GPT-3",
            backgroundImage: gpt3,
            description: "Lorem ipsum dolor sit amet consectetur. Pellentesque nisl pellentesque in id tortor ultrices eu scelerisque elit.",
            codeIn: "React JS",
            link: ''
        }
    ]
}

function Projects() {
    return (
        <div className='portfolio__projects section__padding' id='projects'>
            <div className='portfolio__projects-container section__width' >
                <div className='portfolio__projects-container_heading'>
                    <h1>Projects</h1>
                    <p>Here is some of my latest work! If you require a personalized project, feel free to reach out to me!</p>
                </div>
                <div className='portfolio__projects-container_body'>
                    {projectsList.projects.map((project, i) => {
                        return (
                            <Project title={project.title} backgroundImage={project.backgroundImage} description={project.description} link={project.link} codeIn={project.codeIn} key={project.title + i}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects;
export { projectsList }; 
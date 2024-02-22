import React from 'react';
import portfolioImage from '../../assets/portfolio.png';
import Project from '../../components/project/Project';
import './projects.css';

const projectsList = {
    projects: [ {
            title: "Portfolio",
            backgroundImage: portfolioImage,
            description: "Lorem ipsum dolor sit amet consectetur. Pellentesque nisl pellentesque in id tortor ultrices eu scelerisque elit.",
            link: ''
        },   
        {
            title: "GPT-3",
            backgroundImage: portfolioImage,
            description: "Lorem ipsum dolor sit amet consectetur. Pellentesque nisl pellentesque in id tortor ultrices eu scelerisque elit.",
            link: ''
        },
        {
            title: "GERISH",
            backgroundImage: portfolioImage,
            description: "Lorem ipsum dolor sit amet consectetur. Pellentesque nisl pellentesque in id tortor ultrices eu scelerisque elit.",
            link: ''
        },
        {
            title: "Youtube",
            backgroundImage: portfolioImage,
            description: "Lorem ipsum dolor sit amet consectetur. Pellentesque nisl pellentesque in id tortor ultrices eu scelerisque elit.",
            link: ""
        },
        {
            title: "AirBnb",
            backgroundImage: portfolioImage,
            description: "Lorem ipsum dolor sit amet consectetur. Pellentesque nisl pellentesque in id tortor ultrices eu scelerisque elit.",
            link: ""
        },
        {
            title: "Canvas",
            backgroundImage: portfolioImage,
            description: "Lorem ipsum dolor sit amet consectetur. Pellentesque nisl pellentesque in id tortor ultrices eu scelerisque elit.",
            link: ""
        }
    ]
}

function Projects() {
    return (
        <div className='portfolio__projects section__padding' id='projects'>
            <div className='portfolio__projects-container section__width' >
                <div className='portfolio__projects-container_heading'>
                    <h1>Projects</h1>
                    <p>Here is the more recent work that I've done. <a href='#hire-me'>If you need a personalize project, message me!</a></p>
                </div>
                <div className='portfolio__projects-container_body'>
                    {projectsList.projects.map((project, i) => {
                        return (
                            <Project title={project.title} backgroundImage={project.backgroundImage} description={project.description} link={project.link} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects;
export { projectsList }; 
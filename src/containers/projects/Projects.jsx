import React from 'react';
import gpt3 from '../../assets/gpt3.png';
import gerichtImage from '../../assets/gericht.png';
import nftDistro from '../../assets/nft-distro.png';
import Project from '../../components/project/Project';
import './projects.css';

const projectsList = {
    projects: [  
        {
            title: "GPT-3",
            backgroundImage: gpt3,
            description: "Full responsive website that seamlessly blends modern UI/UX design principles to showcase the transformative power of GPT-3 AI and its applications in technology.",
            codeIn: "React | CSS",
            link: 'https://j3ssy-andu.github.io/gpt3/'
        }, 
        {
            title: "NFT DISTRO",
            backgroundImage: nftDistro,
            description: "Full responsive website that seamlessly blends modern UI/UX design principles to showcase the transformative power of GPT-3 AI and its applications in technology.",
            codeIn: "React | CSS",
            link: "https://j3ssy-andu.github.io/nft-distro/"
        },
        {
            title: "GERICHT",
            backgroundImage: gerichtImage,
            description: "Full responsive website that seamlessly blends modern UI/UX design principles to showcase the transformative power of GPT-3 AI and its applications in technology.",
            codeIn: "React | CSS",
            link: "https://j3ssy-andu.github.io/gericht-restaurant/"
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
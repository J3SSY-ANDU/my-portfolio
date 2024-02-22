import React, { useState } from 'react';
import CodeSection from '../../components/code-section/CodeSection'
import portfolioImage from '../../assets/portfolio.png';
import './projects.css';

const projectsList = {
    react: {
        name: "React",
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
}

function Projects() {
    const [toggleReact, setToggleReact] = useState(true);

    return (
        <div className='portfolio__projects section__padding' id='projects'>
            <div className='portfolio__projects-container section__width' >
                <div className='portfolio__projects-container_heading'></div>
                    <h1>Projects</h1>
                    <div className='portfolio__projects-container_heading-sideBar'>
                        <div onClick={ () => setToggleReact(!toggleReact) } style={{ background: toggleReact ? "#ffffff1a" : "" }}>
                            <p>{projectsList.react.name}</p>
                        </div>
                    </div>
                <div className='portfolio__projects-container_body'>
                    {toggleReact &&
                        <CodeSection projectsList={projectsList} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects;
export { projectsList }; 
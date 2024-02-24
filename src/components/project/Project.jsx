import React from 'react';
import './project.css';

function Project({ title, backgroundImage, description, codeIn, link }) {
    return (
        <div className='portfolio__project' style={{background: `linear-gradient(0deg, rgba(30, 30, 30, 0.3), rgba(30, 30, 30, 0.3)), url(${backgroundImage})`, backgroundPosition: "center", backgroundSize: "cover"}}>
            <a href={link} className='portfolio__project-container'>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{codeIn}</p>
            </a>
        </div>
    )
}

export default Project;
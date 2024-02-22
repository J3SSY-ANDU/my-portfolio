import React from 'react';
import './project.css';

function Project({ title, backgroundImage, description, codeIn, link }) {
    return (
        <div className='portfolio__project'>
            <div className='portfolio__project-container'>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{codeIn}</p>
            </div>
        </div>
    )
}

export default Project;
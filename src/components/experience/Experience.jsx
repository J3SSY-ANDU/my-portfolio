import React from 'react';
import './experience.css';

function Experience({ title, text, link}) {
    return (
        <div className='portfolio__experience'>
            <div className='portfolio__experience-content section__width'>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={link} target='_blank' className='transparent-button'><p>Visit Website</p></a>
            </div>
        </div>
    )
}

export default Experience;
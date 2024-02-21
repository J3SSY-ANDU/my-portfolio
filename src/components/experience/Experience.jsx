import React from 'react';
import './experience.css';

function Experience({ title, text }) {
    return (
        <div className='portfolio__experience'>
            <div className='portfolio__experience-content section__width'>
                <h3>{title}</h3>
                <p>{text}</p>
                <p className='transparent-button'><a href='#'>Learn more</a></p>
            </div>
        </div>
    )
}

export default Experience;
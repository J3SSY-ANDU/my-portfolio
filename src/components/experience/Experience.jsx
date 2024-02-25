import React from 'react';
import './experience.css';

function Experience({ title, text }) {
    return (
        <div className='portfolio__experience'>
            <div className='portfolio__experience-content section__width'>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href='#projects' className='transparent-button'><p>Learn more</p></a>
            </div>
        </div>
    )
}

export default Experience;
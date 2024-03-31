import React from 'react';
import './experience.css';
import ScrollAnimation from '../scroll-animation/ScrollAnimation';

function Experience({ title, text, link}) {
    return (
        <div className='portfolio__experience'>
            <div className='portfolio__experience-content section__width'>
                <ScrollAnimation>
                    <div className='decoration-div'/>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <a href={link} target='_blank' rel='noreferrer' className='transparent-button'><p>Visit Website</p></a>
                </ScrollAnimation>                
            </div>
        </div>
    )
}

export default Experience;
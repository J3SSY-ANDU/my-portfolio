import React from 'react';
import githubImage from '../../assets/github.png';
import envelopeImage from '../../assets/envelope-solid.png';
import fileImage from '../../assets/file-solid.png';
import resumeFile from '../../assets/resume.pdf';
import './footer.css';

function Footer() {
    return (
        <div className='portfolio__footer'>
            <div className='portfolio__footer-container section__width'>
                <div className='portfolio__footer-container_quote'>
                    <h1>“Hard work beats talent when talent doesn't work hard”</h1>
                    <p>-Tim Notke</p>
                </div>
                <div className='portfolio__footer-container_links'>
                
                    <a href='https://github.com/J3SSY-ANDU' target='_blank'><img src={githubImage} /></a>
                    <a href='mailto:jessy.andujar@upr.edu' target='_blank'><img src={envelopeImage}/></a>
                    <a href={resumeFile} target='_blank'><img src={fileImage}/></a>
                </div>
                <p>University of Puerto Rico at Mayagüez</p>
            </div>
        </div>
    )
}

export default Footer;
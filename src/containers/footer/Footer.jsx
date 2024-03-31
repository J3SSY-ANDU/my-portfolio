import React from 'react';
import githubImage from '../../assets/github.png';
import envelopeImage from '../../assets/envelope-solid.png';
import fileImage from '../../assets/file-solid.png';
import resumeFile from '../../assets/resume.pdf';
import copyrightImage from '../../assets/copyright-regular.svg';
import './footer.css';
import ScrollAnimation from '../../components/scroll-animation/ScrollAnimation';

function Footer() {
    return (
        <div className='portfolio__footer'>
            <div className='portfolio__footer-container section__width section__padding'>
                <ScrollAnimation>
                    <div className='portfolio__footer-container_quote'>
                        <h1>“Hard work beats talent when talent doesn't work hard”</h1>
                        <p>-Tim Notke</p>
                    </div>
                </ScrollAnimation>
                    <div className='portfolio__footer-container_links'>
                        <ScrollAnimation>
                            <a href='https://github.com/J3SSY-ANDU' target='_blank' rel='noreferrer'><img src={githubImage} alt='github link' loading='lazy'/></a>
                        </ScrollAnimation>
                        <ScrollAnimation>
                            <a href='mailto:jessy.andujar@upr.edu' target='_blank' rel='noreferrer'><img src={envelopeImage} alt='email link' loading='lazy'/></a>
                        </ScrollAnimation>
                        <ScrollAnimation>
                            <a href={resumeFile} target='_blank' rel='noreferrer'><img src={fileImage} alt='resume link' loading='lazy'/></a>
                        </ScrollAnimation>
                    </div>
                <ScrollAnimation>
                    <p>University of Puerto Rico at Mayagüez</p>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div style={{display: "flex", justifyContent: "flex-start", alignItems: "center", height: "16px"}}>
                        <img src={copyrightImage} alt='copyright' style={{height: "100%", alignSelf: "center", marginRight: "0.4rem"}} loading='lazy'/>
                        <p style={{fontSize: "14px"}}>2023 Jessy Andujar Cruz. All rights reserved.</p>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default Footer;
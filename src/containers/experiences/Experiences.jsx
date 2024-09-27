import React from 'react';
import Experience from '../../components/experience/Experience';
import figureImage2 from '../../assets/Holographic 3D shape 43 1.png';
import figureImage3 from '../../assets/Holographic 3D shape 74.png';
import figureImage5 from '../../assets/Holographic 3D shape 11.png';
import figureImage7 from '../../assets/Holographic 3D shape 17.png';
import figureImage9 from '../../assets/Holographic 3D shape 49.png';
import figureImage10 from '../../assets/Holographic 3D shape 56.png';
import './experiences.css';
import ScrollAnimation from '../../components/scroll-animation/ScrollAnimation';

const info = [
    {
        title: "RUMBus",
        text: "Collaborated on RUMBus, focusing on the development of user-friendly interfaces, including maps and notifications, to enhance the UPRM bus service app using React Native.",
        link: "https://x.com/RUMBusPR"
    }, 
    {
        title: "ICPC",
        text: "Participating in the ICPC, I focused on C++ to tackle LeetCode-similar challenges, cultivating collaboration and problem-solving skills in an international setting.",
        link: "https://icpc.global/"
    },
    {
        title: "Evolving Space",
        text: "At Evolving Space, I facilitated Web3 workshops, drove community growth, and guided students in tech projects, enhancing digital innovation engagement.",
        link: "https://www.evolvingspace.org/"
    }
]

function Experiences() {
    return (
        <div className='portfolio__experiences section__padding' id='experience'>
            <div className='portfolio__experiences-title'>
                <ScrollAnimation>
                    <h1>Experience</h1>
                </ScrollAnimation>
            </div>
            <div className='portfolio__experiences-overlay'>
                <div className='portfolio__experiences-overlay_info'>
                    <div className='portfolio__experiences-overlay_info-map section__width'>
                        {info.map((experience, i) => (
                            <Experience title={experience.title} text={experience.text} link={experience.link} key={experience.title + i} />
                        ))}
                    </div>
                </div>
                <div className='portfolio__experiences-overlay_images'>
                    <img alt='decoration 1' src={figureImage2} className='second-image' />
                    <img alt='decoration 2' src={figureImage3} className='third-image' />
                    <img alt='decoration 3' src={figureImage5} className='fifth-image' />
                    <img alt='decoration 4' src={figureImage7} className='seventh-image' />
                    <img alt='decoration 5' src={figureImage9} className='nineth-image' />
                    <img alt='decoration 6' src={figureImage10} className='tenth-image' />
                </div>
            </div>
        </div>
    )
}

export default Experiences;
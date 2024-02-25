import React from 'react';
import Experience from '../../components/experience/Experience';
import figureImage1 from '../../assets/Holographic 3D shape 78 1.png';
import figureImage2 from '../../assets/Holographic 3D shape 43 1.png';
import figureImage3 from '../../assets/Holographic 3D shape 14 1.png';
import './experiences.css';

const info = [
    {
        title: "Rumbus",
        text: "Collaborated on RUMBus, focusing on the development of user-friendly interfaces, including maps and notifications, to enhance the UPRM bus service app using React Native.",
        link: ""
    }, 
    {
        title: "CPC",
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
                <h1>Experience</h1>
            </div>
            <div className='portfolio__experiences-overlay'>
                <div className='portfolio__experiences-overlay_info'>
                    <div className='portfolio__experiences-overlay_info-map section__width'>
                        {info.map((experience, i) => (
                            <Experience title={experience.title} text={experience.text} link={experience.link} key={experience.title + i} />
                        ))}
                    </div>
                    <div className='portfolio__experiences-container_overlay-images'>
                        <img alt='figure-1' src={figureImage1} className='first-image'/>
                        <img alt='figure-2' src={figureImage2} className='second-image'/>
                        <img alt='figure-3' src={figureImage3} className='third-image'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences;
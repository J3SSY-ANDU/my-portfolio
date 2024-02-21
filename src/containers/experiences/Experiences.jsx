import React from 'react';
import Experience from '../../components/experience/Experience';
import figureImage1 from '../../assets/Holographic 3D shape 78 1.png';
import figureImage2 from '../../assets/Holographic 3D shape 43 1.png';
import figureImage3 from '../../assets/Holographic 3D shape 14 1.png';
import './experiences.css';

const info = [
    {
        title: "Rumbus",
        text: "Lorem ipsum dolor sit amet consectetur. Pellentesque nisl pellentesque in id tortor ultrices eu scelerisque elit. Sagittis dolor pellentesque sed ornare tellus vel."
    }, 
    {
        title: "CPC",
        text: "Lorem ipsum dolor sit amet consectetur. Pellentesque nisl pellentesque in id tortor ultrices eu scelerisque elit. Sagittis dolor pellentesque sed ornare tellus vel."
    },
    {
        title: "Evolving Space",
        text: "Lorem ipsum dolor sit amet consectetur. Pellentesque nisl pellentesque in id tortor ultrices eu scelerisque elit. Sagittis dolor pellentesque sed ornare tellus vel."
    }
]

function Experiences() {
    return (
        <div className='portfolio__experiences section__margin' id='experience'>
            <div className='portfolio__experiences-title'>
                <h1>Experience</h1>
            </div>
            <div className='portfolio__experiences-overlay'>
                <div className='portfolio__experiences-overlay_info'>
                    <div className='portfolio__experiences-overlay_info-map section__width'>
                        {info.map((experience, i) => (
                            <Experience title={experience.title} text={experience.text} key={experience.title + i} />
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
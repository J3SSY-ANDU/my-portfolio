import React from 'react';
import './header.css';
import profileImage from '../../assets/profile-photo.png';
import Navbar from '../navbar/Navbar';

function Header() {
    return (
        <div className='portfolio__header section__padding'>
            <div className='portfolio__header-container section__width section__width-tv'>
                <div className='portfolio__header-container_navbar'>
                    <Navbar />
                </div>
                <div className='portfolio__header-container_intro'>
                    <div className='portfolio__header-container_intro-text'>
                        <h1>Hi, my name is <i>Jessy,</i></h1>
                        <p>I'm a front-end fanatic and undergrad software engineer, cooking up cool stuff with code.</p>
                        <p><a href='#projects'>View Projects</a></p>
                    </div>
                    <div className='portfolio__header-container_intro-image'>
                        <img src={profileImage} alt='profile'/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Header;
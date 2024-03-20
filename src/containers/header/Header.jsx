import React from 'react';
import './header.css';
import Navbar from '../navbar/Navbar';

function Header({ profileImage }) {
    return (
        <div className='portfolio__header'>
            <div className='portfolio__header-container section__width'>
                <div className='portfolio__header-container_navbar'>
                    <Navbar />
                </div>
                <div className='portfolio__header-container_intro'>
                    <div className='portfolio__header-container_intro-text'>
                        <h1>Hi, my name is <i>Jessy,</i></h1>
                        <p>I'm a front-end fanatic and undergrad software engineer, cooking up cool stuff with code.</p>
                        <a href='#projects' className='gradient__button-header'><p>View Projects</p></a>
                    </div>
                    <div className='portfolio__header-container_intro-image'>
                        <img src={profileImage} alt='profile' fetchpriority={'high'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
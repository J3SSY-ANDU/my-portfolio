import React from 'react';
import { useState } from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
    <>
        <p><a href='#experience'>About</a></p>
        <p><a href='#projects'>Projects</a></p>
        <p className='transparent-button'><a href='#hire-me'>Hire me</a></p>
    </>
)

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='portfolio__navbar'>
            <div className='portfolio__navbar-links section__width section__width-tv'>
                <div className='portfolio__navbar-links_logo'>
                    <h3>Jessy's Portfolio</h3>
                </div>
                <div className='portfolio__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='portfolio__navbar-menu'>
                {toggleMenu 
                ? <RiCloseLine color="#fff" size={24} onClick={() => setToggleMenu(false)}/>
                : <RiMenu3Line color="#fff" size={24} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className='portfolio__navbar-menu_content'>
                        <Menu />
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar;
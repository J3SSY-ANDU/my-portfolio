import React from 'react';
import { useState } from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
    <>
        <a href='#experience'><p>About</p></a>
        <a href='#projects'><p>Projects</p></a>
        <a href='#hire-me' className='transparent-button'><p>Hire me</p></a>
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
import React from 'react';
import './hire-me.css';

function HireMe() {
    return (
        <div className='portfolio__hireMe section__padding' id='hire-me'>
            <div className='portfolio__hireMe-container section__width'>
                <div className='portfolio__hireMe-container_heading'>
                    <h1>Send me a message!</h1>
                    <p>Do you need help with a project or are you thinking of hiring someone? I'm available and willing to work with you!</p>
                </div>
                <div className='portfolio__hireMe-container_input section__width'>
                    <div>
                        <input type='text' placeholder='Enter your name' />
                        <input type='text' placeholder='Enter your email' />
                    </div>
                    <div>
                        <input type='text' placeholder='Message' />
                    </div>
                </div>
                <p><a href='#'>Submit</a></p>
            </div>
        </div>
    )
}

export default HireMe;
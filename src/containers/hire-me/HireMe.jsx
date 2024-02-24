import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './hire-me.css';

function HireMe() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_e09pdjb', 'template_cazkx69', form.current, {
            publicKey: 'nW9rNMvcRVumig-gI',
        })
        .then(
            (result) => {
            console.log('SUCCESS!');
            console.log(result.text);
            e.target.reset();
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <div className='portfolio__hireMe section__padding' id='hire-me'>
            <div className='portfolio__hireMe-container section__width'>
                <div className='portfolio__hireMe-container_heading'>
                    <h1>Send me a message!</h1>
                    <p>Do you need help with a project or are you thinking of hiring someone? I'm available and willing to work with you!</p>
                </div>
                <form ref={form} onSubmit={sendEmail} className='portfolio__hireMe-container_input'>
                    <div>
                        <input type="text" name="from_name" placeholder='Enter your name'/>
                        <input type="email" name="user_email" placeholder='Enter your email'/>
                    </div>
                    <div>
                        <input type='textarea' name='message' placeholder='Message'/>
                    </div>
                    
                    <input type="submit" value="Send" className='gradient__button'/>
                </form>
            </div>
            
        </div>
    )
}

export default HireMe;
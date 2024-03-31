import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './hire-me.css';
import ScrollAnimation from '../../components/scroll-animation/ScrollAnimation';

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
                    <ScrollAnimation>
                        <h1>Send me a message!</h1>
                    </ScrollAnimation>                    
                    <ScrollAnimation>
                        <p>Do you need help with a project or are you thinking of hiring someone? I'm available and willing to work with you!</p>
                    </ScrollAnimation>                    
                </div>
                <form ref={form} onSubmit={sendEmail} className='portfolio__hireMe-container_input'>
                    <div>
                        <ScrollAnimation>
                            <input type="text" name="from_name" placeholder='Enter your name'/>
                        </ScrollAnimation>                    
                        <ScrollAnimation>
                            <input type="email" name="user_email" placeholder='Enter your email'/>
                        </ScrollAnimation>                    
                    </div>
                    <div>
                        <ScrollAnimation>
                            <input type='textarea' name='message' placeholder='Message'/>
                        </ScrollAnimation>                    
                    </div>
                    <ScrollAnimation>
                        <input type="submit" value="Send" id='gradient__button'/>
                    </ScrollAnimation>                    
                </form>
            </div>
            
        </div>
    )
}

export default HireMe;
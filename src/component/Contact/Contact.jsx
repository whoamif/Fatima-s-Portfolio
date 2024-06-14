import React from 'react';
import "./contact.scss"
import { MdEmail } from 'react-icons/md';
import { SiDiscord } from 'react-icons/si';
import { CopyButton, Tooltip } from '@mantine/core';
import Form from '../Form/Form';

const Contact = ({title = true}) => {
    return (
        <div className='contact-container'>
            {title && <div className="top" data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine">
                <div>
                    <h3><span>#</span>Contact</h3>
                    <div className='line'></div>
                </div>
            </div>}
            <div className="bottom" data-aos="fade-right">
                <p>I'm excited to offer my services as a full-stack web Developer or Game Developer. Whether you're looking to hire a freelancer or bring someone onto your team, I'm ready to take on your project and bring it to life!</p>
                <div className="message">
                    <span>Message here</span>
                    
                    <CopyButton value="adjissifatimaamina" timeout={2000} >
                        {({ copied, copy }) => (
                            <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                                <div className="item" onClick={copy}>
                                    <SiDiscord className='icon'/> 
                                    <span>/adjissifatimaamina</span>
                                </div>
                            </Tooltip>
                        )}
                        </CopyButton>
                    <div className="item">
                        <a href="mailto:m_guendouz@estin.dz" target='_blank' rel="noreferrer"><MdEmail className='icon'/><span>/adjissifatimaamina@gmail.com</span></a>
                    </div>
                </div>
            </div>
            <Form />
        </div>
    );
}

export default Contact;

import React from 'react';
import "./Footer.scss"
import { GoMarkGithub } from 'react-icons/go';
import { SiLinkedin } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className="top">
                <div className="content">
                    <div>
                        fatima amina adjissi
                        <span>adjissifatimaamina@gmail.com</span>
                    </div>
                    <p>Full Stack Web developer / Game Developer</p>
                </div>
                <div className="media">
                    <h3>Fatima Amina</h3>
                    <div className="icons">
                        <a href='https://github.com/whoamif' target='_blank' rel="noreferrer"><GoMarkGithub className='icon'/></a>
                        <a href='https://www.linkedin.com/in/fatima-amina-adjissi-info/' target='_blank' rel="noreferrer"><SiLinkedin className='icon'/></a>
                        <a href="mailto:adjissifatimaamina@gmail.com" target='_blank' rel="noreferrer"><MdEmail className='icon'/></a>
                    </div>
                </div>
            </div>
            <p className='copyright'>© Copyright 2024. <h6>Made by Elias Developed by Mehdi Guendouz</h6>
</p>
        </footer>
    );
}

export default Footer;

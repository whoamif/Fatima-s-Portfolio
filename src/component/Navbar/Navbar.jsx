import React, { useState  } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import { GoMarkGithub } from 'react-icons/go';
import { SiLinkedin } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const Navbar = ({path = ""}) => {

    const [menu, setMenu] = useState(false);

    
    return (
        <div className='nav-container'>
            <div className='falling-contact'>
                <div className="line-div"></div>
                <div className="icons">
                    <a href='https://github.com/whoamif' target='_blank' rel="noreferrer"><GoMarkGithub className='icon'/></a>
                    <a href='https://www.linkedin.com/in/fatima-amina-adjissi-info/' target='_blank' rel="noreferrer"><SiLinkedin className='icon'/></a>
                    <a href="mailto:adjissifatimaamina@gmail.com" target='_blank' rel="noreferrer"><MdEmail className='icon'/></a>
                </div>
            </div>
            {/* <img src="" alt="" /> */}
            <h1><Link to='/'>Adjissi Fatima Amina</Link></h1>
            <nav>
                <ul>
                    <li><Link className={`${path === "" ? "color-white" : "color-gray"}`} to='/'><span>#</span>home</Link></li>
                    <li><Link className={`${path === "projects" ? "color-white" : "color-gray"}`} to='/projects'><span>#</span>work</Link></li>
                    <li><Link className={`${path === "about" ? "color-white" : "color-gray"}`} to='/about'><span>#</span>about-me</Link></li>
                    <li><Link className={`${path === "contacts" ? "color-white" : "color-gray"}`} to='/contacts'><span>#</span>Contacts</Link></li>
                </ul>
            </nav>

            {/* sidebar  */}

            {!menu ? <img src="./icons/burger.png" alt="menu" className='menu-icons' onClick={() => setMenu(prev => !prev)}/> 
            : <img src="./icons/close.png" alt="menu" onClick={() => setMenu(prev => !prev)}  className='menu-icons'/>}
            {menu && <div className="sidebar-container">
                <div className="sidebar">
                    <div className="links">
                        <Link className={`${path === "" ? "color-white" : "color-gray"}`} to='/'><span>#</span>home</Link>
                        <Link className={`${path === "projects" ? "color-white" : "color-gray"}`} to='/projects'><span>#</span>work</Link>
                        <Link className={`${path === "about" ? "color-white" : "color-gray"}`} to='/about'><span>#</span>about-me</Link>
                        <Link className={`${path === "contacts" ? "color-white" : "color-gray"}`} to='/contacts'><span>#</span>Contacts</Link>
                    </div>
                    <div className="link-icon">
                        <a href='https://github.com/whoamif' target='_blank' rel="noreferrer"><GoMarkGithub className='icon'/></a>
                        <a href='https://www.linkedin.com/in/fatima-amina-adjissi-info/' target='_blank' rel="noreferrer"><SiLinkedin className='icon'/></a>
                        <a href="mailto:adjissifatimaamina@gmail.com" target='_blank' rel="noreferrer"><MdEmail className='icon'/></a>
                    </div>
                </div>
            </div>}
            
        </div>
    );
}

export default Navbar;

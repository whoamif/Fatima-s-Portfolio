import React from 'react';
import Projects from '../../component/Projects/Projects';
import "./AllProjects.scss"
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/footer/Footer';

const AllProjects = ({path}) => {
    return (
        <div className='Projects-container'>
            <div className="wrapper">
                <Navbar path={path} />
                <div className="up">
                    <h1><span>/</span>Projects</h1>
                    <p>Check my projects</p>
                </div>
                <Projects title={"complete-apps"} typeProject={"big"}/>
                <Projects title={"small-projects"} typeProject={"small"}/>
            </div>
            <Footer />
        </div>
    );
}

export default AllProjects;

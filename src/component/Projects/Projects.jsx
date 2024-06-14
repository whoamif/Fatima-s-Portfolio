import React from 'react';
import "./projects.scss"
import Card from './Card';
import { projects , smallProjects } from '../../data';
import { Link } from 'react-router-dom';

const Projects = ({title , typeProject , view=false}) => {

    
    return (
        <div className='project-container'>
            <div className="top" data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine">
                <div>
                    <h3><span>#</span>{title}</h3>
                    <div className='line'></div>
                </div>
                {view && <Link to="/projects">{"View all ~~>"}</Link>}
            </div>
            <div className="work">
                {typeProject === "big" ? projects.map(project => <Card project={project} key={project.id} />)
                : smallProjects.map(project => <Card project={project} key={project.id} />)
                }
            </div>
        </div>
    );
}

export default Projects;

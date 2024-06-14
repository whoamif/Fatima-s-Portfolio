import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { MdLiveTv } from 'react-icons/md';

const Card = ({project}) => {
    
    return (
        <div className='card-item' data-aos="fade-right">
            <div className="image">
                <img src={project.image} alt="" />
            </div>
            <p className='lang'>{project.tech}</p>
            <div className="desc">
                <h3>{project.title}</h3>
                <p>{project.description} </p>
                <div className="btn-container">
                    {project.live && <a href={project.live} className='live' target='_blank' rel="noreferrer"><MdLiveTv />Live</a>}
                    <a href={project.github} className='cached' target='_blank' rel="noreferrer"><GoMarkGithub />GitHub</a>
                </div>
            </div>
        </div>
    );
}

export default Card;

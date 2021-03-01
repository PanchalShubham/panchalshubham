import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import projectsList from '../utility/project_list';
import '../styles/Projects.scss';

export default function Projects() {
    const [animation, setAnimation] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setAnimation(false);
        }, 4000);
    }, []);

    return (
        <div id="projects">
            {animation && 
            <div className='loader-container'>
                <div className='loader'>
                    <div className='loader--dot'></div>
                    <div className='loader--dot'></div>
                    <div className='loader--dot'></div>
                    <div className='loader--dot'></div>
                    <div className='loader--dot'></div>
                    <div className='loader--dot'></div>
                    <div className='loader--text'></div>
                </div>
            </div>}

            {!animation && 
            <div className="projects-container">
                <Navbar />
                <div className="container">
                    {projectsList.map((project, index) => (
                        <div className="project-item" key={index}>
                            <div className="project-time">{project.time}</div>
                            <div className="project-stack">
                                <img src={project.img} alt="" />
                            </div>
                            <div className="project-hr-separator"></div>
                            <div className="project-details">
                                <a href={project.link} target="_blank" rel="noreferrer">{project.title}</a> <br />
                                {project.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </div>}
        </div>
    );
};
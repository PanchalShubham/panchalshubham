import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ShubhamImage from '../assets/shubham.jpg';
import DownloadIcon from '../assets/download.png';
import '../styles/Homepage.scss';
import loadAnimation from '../utility/homepage_loader';
import Resume from '../assets/ShubhamPanchalResume.pdf';

export default function Homepage() {

    const [animation, setAnimation] = useState(true);
    useEffect(() => {
        loadAnimation().then(() => { }).catch(err => console.log(err)).finally(() => setAnimation(false));
    }, []);

    useEffect(()=>{
        if (animation)  return;
        let span = document.getElementById('type-writer');
        if (!span)  return;         
        span.innerHTML = '';
        let text = `I'm a Java developer in love with full stack web development. I love teaching and discovering new world with my innovative ideas.`;
        let i = 0, typingSpeed = 50, length = text.length;
        let interval = setInterval(()=>{
            if (i === length - 1) {
                clearInterval(interval);
                let link = document.getElementById('resume-button');
                if (link)   link.setAttribute(`style`, `display: inline-flex`);
            } else {
                span.innerHTML += text.charAt(i++);
            }
        }, typingSpeed);                
    }, [animation]);

    return (
        <div className="homepage">
            {animation && <svg id="svgout" />}
            {!animation &&
                <div className="home_container">
                    <Navbar />
                    <div className="about_container row">
                        <div className="col-lg-6">
                            <img className="icon" src={ShubhamImage} alt="" />
                        </div>
                        <div className="info col-lg-6">
                            <h1>Hello Everyone!</h1>
                            <span className="summary" id="type-writer"></span>
                            <span className="blinking">|</span> <br/> <br/>
                            <a id="resume-button" className="resume-button" 
                                href={Resume} onClick={(event) => {
                                    event.preventDefault();
                                    window.open(Resume, "_blank");
                                }}>
                                <img src={DownloadIcon} alt="" /> Download resume
                            </a>
                        </div>
                    </div>
                </div>}
        </div>
    )
};
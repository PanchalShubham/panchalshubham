import React, { useEffect } from 'react';
import Navbar from './Navbar';
import '../styles/knowledge.scss';
import { initialize } from '../utility/knowledge';

export default function Knowledge() {
    useEffect(() => {
        initialize();
    }, []);

    return (
        <div className="knowledge">
            <Navbar />
            <div className="opening hide-UI view-2D zoom-large data-close controls-close"
                id="body">
                <div id="data">
                    <a className="mercury" href="#mercuryspeed">C/C++</a>
                    <a className="venus" href="#venusspeed">Java</a>
                    <a className="earth active" href="#earthspeed">Web</a>
                    <a className="mars" href="#marsspeed">Database</a>
                    <a className="jupiter" href="#jupiterspeed">Python</a>
                    <a className="saturn" href="#saturnspeed">Internship</a>
                </div>
                <div id="universe" className="scale-stretched">
                    <div id="galaxy">
                        <div id="solar-system" className="earth">
                            <div id="mercury" className="orbit">
                                <div className="pos">
                                    <div className="planet">
                                        <dl className="infos">
                                            <dt>C/C++</dt>
                                            <dd><span></span></dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div id="venus" className="orbit">
                                <div className="pos">
                                    <div className="planet">
                                        <dl className="infos">
                                            <dt>Java</dt>
                                            <dd><span></span></dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div id="earth" className="orbit">
                                <div className="pos">
                                    <div className="orbit">
                                        <div className="pos">
                                            <div className="moon"></div>
                                        </div>
                                    </div>
                                    <div className="planet">
                                        <dl className="infos">
                                            <dt>ReactJS NodeJS</dt>
                                            <dd><span></span></dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div id="mars" className="orbit">
                                <div className="pos">
                                    <div className="planet">
                                        <dl className="infos">
                                            <dt>MySQL and MongoDB</dt>
                                            <dd><span></span></dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div id="jupiter" className="orbit">
                                <div className="pos">
                                    <div className="planet">
                                        <dl className="infos">
                                            <dt>OpenCV and sklearn</dt>
                                            <dd><span></span></dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div id="saturn" className="orbit">
                                <div className="pos">
                                    <div className="planet">
                                        <div className="ring"></div>
                                        <dl className="infos">
                                            <dt>C++ software developer intern @cppsecrets.com <br />SDE Intern @Microsoft'21</dt>
                                            <dd><span></span></dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>

                            <div id="sun">
                                <dl className="infos">
                                    <dt>Sun</dt>
                                    <dd><span></span></dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
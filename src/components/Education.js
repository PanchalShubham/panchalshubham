import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/Education.scss';

export default function Education() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const info = [
        {title: `High School`, year: `2014-2015`, dest: `Saint Angels Senior Secondary School, Baghpat`},
        {title: `Senior High School`, year: `2016-2017`, dest: `Saint Angels Senior Secondary School, Baghpat`},
        {title: `B. Tech in CSE`, year: `2018-2022`, dest: `Indian Institute of Technology, Hyderabad`},
    ]

    const size = info.length;
    const nextItem  = () => setSelectedIndex((selectedIndex + 1) % size);
    const prevItem = () => setSelectedIndex(selectedIndex === 0 ? size - 1 : selectedIndex - 1);

    return (
        <div className="education">
            <Navbar />
            <div className="education_item">
                <button onClick={prevItem}><i className="fa fa-chevron-left"></i></button>
                <div className="info">
                    <h1>{info[selectedIndex].title}</h1>
                    <em><p className="year">{info[selectedIndex].year}</p></em>
                    <p className="dest">{info[selectedIndex].dest}</p>
                </div>
                <button onClick={nextItem}><i className="fa fa-chevron-right"></i></button>
            </div>
        </div>
    );
};
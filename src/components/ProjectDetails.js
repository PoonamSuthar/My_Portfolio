import "./ProjectDetailStyle.css"
import React from 'react';
import Project1Image from '../assets/3675820.jpg';
import Project2Image from '../assets/library.jpg';
import Project3Image from '../assets/vecteezy_netflix-logo-editorial-vector_22511457.jpg';
import Project4Image from '../assets/suddoku.jpg';
import Project5Image from '../assets/cab.jpg';
import Project6Image from '../assets/esp32.jpeg';


const ProjectDetails = () => {

    return (
    <div className="project-page">
        <div className="text">
        <h1>Projects</h1>

        </div>
        <div className="project-list">
        <div className="project-card">
            <a href="https://github.com/PoonamSuthar/Netflix_Analysis" target="Github">
                <img src={Project3Image} alt="Project 3" />
                <div className="project-overlay">
                <h3>Netflix Analysis Dashboard</h3>
            </div>
            </a>
            
        </div>
        <div className="project-card">
            <a href="https://github.com/PoonamSuthar/Cab-Booking-App" target="Github">
                <img src={Project5Image} alt="Project 5" />
                <div className="project-overlay">
                <h3>Cab Booking App</h3>
                {/* <p>Description of Project 5</p> */}
            </div>
            </a>
            
        </div>
        <div className="project-card">
            <a href="https://github.com/PoonamSuthar/AI-Algorithms-for-Sudoku-Solver" target="Github">

                <img src={Project4Image} alt="Project 4" />
                <div className="project-overlay">
                <h3>AI Suddoku Solver </h3>
                {/* <p>Description of Project 4</p> */}
                </div>
            </a>
            
        </div>
        <div className="project-card">
            <a href="https://github.com/PoonamSuthar/Library_Management_system" target="Github">
            <img src={Project2Image} alt="Project 2" />
            <div className="project-overlay">
            <h3>Library Management App</h3>
            {/* <p>Description of Project 2</p> */}
            </div>
            </a>
            
        </div>
        <div className="project-card">
        <a href="https://github.com/PoonamSuthar/My_Portfolio" target="Github">
            <img src={Project1Image} alt="Project 1" />
            <div className="project-overlay">
            <h3>My_Portfolio</h3>
            {/* <p>Description of Project </p> */}
            </div>
            </a>
        </div>
        
        
        <div className="project-card">
        <a href="https://github.com/PoonamSuthar/ESP32_CamModule_VideoRecording" target="Github">

            <img src={Project6Image} alt="Project 6" />
            <div className="project-overlay">
            <h3>ESP32_VideoRecording</h3>
            {/* <p>Description of Project 6</p> */}
            </div>
            </a>
        </div>

        </div>
    </div>
    );
}

export default ProjectDetails;

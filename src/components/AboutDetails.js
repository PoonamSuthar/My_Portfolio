import React from 'react'
import "./AboutDetailStyle.css"
// import Navbar from './Navbar'
import IntroImg from "../assets/background.jpg";
import ProfileImg from "../assets/poonam_pic2.jpeg";



const AboutDetails = () => {
  return (
    <div className='aboutMe'>
        <div className='profile-pic'>
            <img className='intro-img' src={IntroImg} alt="IntroImg" />  
            <img className='img2' src={ProfileImg} alt="ProfileImg" />  
            <a className="resume-link" href="https://drive.google.com/file/d/15fiEn2b6Vx9JV8MrjUZzhNP6HPu3V3LT/view" target="_blank" rel="noopener noreferrer">View Resume</a>
            <div className='column'>
                <div className='column-about'>
                    <h2>
                        ABOUT ME
                    </h2>
                </div>
                <div className='column-para'>
                    <p style={{ color: '#DDE4D6' }}>
                    {/* I am a Pre-Final year Student at IIT Jodhpur and am doing my B.Tech in Artificial Intelligence and Data Science. I enjoy problem-solving and always try to give my 100% to anything I do. I have worked with languages like C++, Python, Django, MySQL, HTML5, CSS and made several projects involving Machine Learning and Neural Networks. */}
                    I am an aspiring software developer, Currently a final-year student at IIT Jodhpur. I am a dedicated problem-solver who is always up for a challenge. Whether it's solving complex coding puzzles or finding innovative solutions to real-world problems.
Throughout my academic journey, I have gained knowledge in various programming languages, including C++, Python,JavaScript, R and web development technologies such as Django, ReactJS, HTML5, and CSS. I have also worked with databases, particularly MySQL, to handle and manipulate data efficiently.
                    </p>
                    <p style={{ color: '#DDE4D6' }}>
                    <b>Languages</b>: Python, C++, JavaScript, C, C++, HTML/CSS, R
            <br/>
            <b>Databases</b>: MySQL
            <br/>
            <b>Libraries</b>: NumPy, Pandas, Plotly, sklearn, React
            <br/>
            <b>Frameworks</b>: Django,Dash,FastAPI <br/>
            <br/>I am committed to continuous learning and growth and look forward to contributing my skills and expertise to make a positive impact in the field of technology.
                    </p>

                </div>
                

            </div>
        </div>

      
    </div>
  )
}

export default AboutDetails

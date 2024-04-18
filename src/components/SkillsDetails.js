import React from 'react';
import "./SkillsDetailstyle.css";
import PythonPhoto from '../assets/python.png';
import CppPhoto from '../assets/cpp.png';
import CssPhoto from '../assets/CSS.png';
import HtmlPhoto from '../assets/HTML.png';
// import JavaPhoto from '../assets/java.png';
import JSPhoto from '../assets/js.png';
import RPhoto from '../assets/R.png';
import SqlPhoto from '../assets/sql.png';
import DashPhoto from '../assets/Dash.png'
import ReactPhoto from '../assets/Rwact.png'


const SkillsDetails = () => {
  return (
    <div className='container'>
      <div className='column1'>
        <div>
          <h1>Skills</h1>
          <p>These are the technologies I've worked with</p>
        </div>
        <div className='skills-list'>
          
          <div>
            <img src={PythonPhoto} alt='Python' />
            <p>Python</p>
          </div>
          <div>
            <img src={CppPhoto} alt='C++' />
            <p>C++</p>
          </div>
          
          <div>
            <img src={HtmlPhoto} alt='HTML' />
            <p>HTML</p>
          </div>
          <div>
            <img src={CssPhoto} alt='CSS' />
            <p>CSS</p>
          </div>
          <div>
            <img src={JSPhoto} alt='JavaScript' />
            <p>JavaScript</p>
          </div>
          <div>
            <img src={RPhoto} alt='R' />
            <p>R</p>
          </div>
          <div>
            <img src={DashPhoto} alt='Java' />
            <p>Java</p>
          </div>
          <div>
            <img src={ReactPhoto} alt='Java' />
            <p>Java</p>
          </div>
          {/* <div>
            <img src={JavaPhoto} alt='Java' />
            <p>Java</p>
          </div> */}
          
          <div>
            <img src={SqlPhoto} alt='SQL' />
            <p>SQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsDetails;

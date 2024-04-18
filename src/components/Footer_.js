import React from 'react'
import "./FooterStyle.css"
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

const footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
        
            <div className='mobile-no'>
                <a href='9116719724'> 
                    <FaPhone size={20} style={{color:'white'}}/>
                    <span>  +91 9116719724</span>
                </a>
            </div>
            <div className='email-add'>
                <a href='mailto:suthar.4@iitj.ac.in'>
                    
                    <FaEnvelope />
                    <span> suthar.4@iitj.ac.in</span>
                </a>
            </div>

            <div className='linkedin_add'>
                <a href='https://www.linkedin.com/in/poonam-suthar-2430a623a/'>
                <FaLinkedin />
                <span>     https://www.linkedin.com/in/poonam-suthar</span>
                </a>
            </div>
            <div className='github-add'>
                <a href='https://github.com/PoonamSuthar'>
                    
                    <FaGithub />
                    <span>      github.com/PoonamSuthar</span>
                </a>
            </div>
        </div>    
    </div>
    
  )
}

export default footer

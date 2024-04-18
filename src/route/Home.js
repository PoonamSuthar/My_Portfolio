import React from 'react'
import Navbar from '../components/Navbar'
import HeroHeader from '../components/HeroHeader'
import Footer from '../components/Footer_'
import AboutDetails from '../components/AboutDetails'
import SkillsDetails from '../components/SkillsDetails'
import ProjectDetails from '../components/ProjectDetails'
// import AboutMe from '../components/AboutMe'
// import MiddleSkills from '../components/MiddleSkills'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroHeader/>
      <AboutDetails/>
      <SkillsDetails/>
      <ProjectDetails/>
      <Footer/>
      
      
    </div>
  )
}

export default Home

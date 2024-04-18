import React from 'react';
import "./HeroHeaderStyle.css";
import IntoImg from "../assets/background.jpg";
import Typist from 'react-typist';

const HeroHeader = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={IntoImg} alt="IntoImg" />
      </div>
      <div className='content'>
        <p>
          Hi, I'm Poonam Suthar.
        </p>
        <Typist cursor={{ show: false }} loop>
          <h2 className='typing-effect'>
            <Typist.Delay ms={500} />
            <Typist.Delay ms={500} />An Aspiring Developer
            <Typist.Backspace count={34} delay={500} />
            <Typist.Delay ms={500} />A Fast Learner
            <Typist.Backspace count={14} delay={500} />
            <Typist.Delay ms={500} />A Coder
            <Typist.Backspace count={7} delay={500} />
            <Typist.Delay ms={500} />
            <Typist.Delay ms={600}  />Welcome to my portfolio!
          </h2>
        </Typist>
      </div>
    </div>
  );
}

export default HeroHeader;

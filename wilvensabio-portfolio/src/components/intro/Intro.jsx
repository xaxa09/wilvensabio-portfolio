import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/sabio.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="sabio" />
          </div>
        </div>
        <div className="about__content">
          <p>Hello Guys! Im your friend today, You need help? Just DM me. My name is Wilven Klenn L. Sabio from P-4 Payasan, Lianga, Surigao del Sur. A student of North Eastern Mindanao State University - Lianga Campus. </p>
          <a href="#contact" className="btn btn-primary">Ta? Haman ta?</a>
        </div>
      </div>
    </section>
  )
}

export default Intro
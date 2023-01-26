import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="me"/>
          </div>  
        </div>
        <div>
        <p>Full-stack web developer with a specilization in front-end and back-end web-development.Adaptable to new technology to enhance my skills and capabilities.</p>
        <a href="#contact" className='btn btn-primary'>Lets's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
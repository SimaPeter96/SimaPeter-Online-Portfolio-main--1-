import React from 'react';
import ProjectImg from '../Img/Mzamomtsha-Primary.png';
import './Projects.css';
import { Container } from 'react-bootstrap';

function Projects() {
  return (
    <section className="projects" id="projects">
      <Container className="project-content-container">
         <h2 className="project-heading">Projects</h2>
        <div className="project-container"> 
        <div className="project-box">
          <img src={ProjectImg}  alt=""/>
        <div className="Project-layer">
          <h4 className="box-heading">Mzamomtsha Primary School Website</h4>
          <a href="https://melodic-nasturtium-8a6e3c.netlify.app/"></a>
            </div>
          </div>
        </div>
      </Container>
  </section>
  );
}

export default Projects
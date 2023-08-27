import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from '../Img/about-Img.png';
import './About.css';


function About() {
  return (
        <section className="about" id="about">
          <Container>
            <Row className="Row-Col">
              <Col md={6}>
                <img src={Image} alt="Image" className="img-fluid"/>
              </Col>
              <Col md={6} className="align-self-center">
                <div className="home-content">
                  <h1>About Me</h1>
                  <br></br>
                  <p>Hello there! I am a junior software developer.I build 
                    websites using front-end and back-end. I'm very creative.
                    I'm good with graphics and design. I am very passionate and
                    dedicated to my work. With the training experience, I've gained
                    at my learnership, I have acquired the skills and knowledge necessary
                    to make projects a success.
                  </p>
                  <a href="#">Download CV</a>
                </div>
              </Col>
            </Row>
          </Container> 
        </section>
  )
}

export default About
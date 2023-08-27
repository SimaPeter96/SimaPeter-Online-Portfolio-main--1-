import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image1 from '../Img/html.png';
import Image2 from '../Img/css.png';
import Image3 from '../Img/js.png';
import Image4 from '../Img/python.png';
import Image5 from '../Img/java.png';
import Image6 from '../Img/nodeJs.png';
import Image7 from '../Img/react.png';
import './Skills.css';

const responsive = {
  superLargeDesktop: {
    
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



function Skills() {
  return (
    <section className="skills" id="skills" >
      <Container className='skills-content-container'>
        <Row className="skills-Col">
          <Col>
            <h1 className='skills-heading'>Skills</h1>
            <p>These are the skills I've gained during my learnership program</p>
          <div className="skills-bx">
            <Carousel responsive={responsive} infinite={true}   className="skills-slider">
         
              <div className="html-icon">
                  <img src={Image1} alt="" className='skills-image'/>
                  <h2>HTML</h2>
              </div>
              <div className="css-icon">
                  <img src={Image2} alt="" className='skills-image'/>
                  <h2>CSS</h2>
              </div>
              <div className="js-icon">
                  <img src={Image3} alt="" className='skills-image'/>
                  <h2>JS</h2>
              </div>
              <div className="python-icon">
                  <img src={Image4} alt="" className='skills-image'/>
                  <h2>PY</h2>
              </div>
              <div className="java-icon">
                  <img src={Image5} alt="" className='skills-image'/>
                  <h2>JAVA</h2>
              </div>
              <div className="nodeJs-icon">
                  <img src={Image6} alt="" className='skills-image'/>
                  <h2>Node Js</h2>
              </div>
              <div className="react-icon">
                  <img src={Image7} alt="" className='skills-image' />
                  <h2>React</h2>
              </div>
             
            </Carousel>
          </div>
          </Col>
        </Row>
      </Container>
    </section>

   

    
  )
}

export default Skills
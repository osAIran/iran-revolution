import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/be_our_voice.jpg";
import voice from "../../Assets/14.jpeg";
import banner from "../../Assets/WLF-DFI-banner-eng.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Particle from "../Particle";

export default function About() {
  return (

    <Container fluid id="about">

      <Container>


        <Row>


          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textAlign: "left" }}>
              <span className="purple"> Iran's 2022 Revolution </span>
            </h1>
            <p className="home-about-body">
              {/* In the world's first <span className="purple"> feminist revolution</span> in history.
              <br />
              <br /> */}
              We are fighting for <b className="purple"> gender equality, freedom of speech, and freedom of religion.</b>
              <br />
              <br />

              We are fighting against systematic oppression of <b className="purple">minorities and women</b>.
              <br />
              <br />


              We are fighting for <b className="purple">children's</b> lives and future. We are fighting against child murder, marriage, labor and abuse.
            

              {/* <b className="purple-bold"> 13</b> is the minimum age of marriage for girls under islamic law and we will not let it stay for long. */}
              
              
               <br />
               <br />


              We are fighting for <b className="purple">justice</b> for crimes against humanity, and we will not stop until the trial of <b className="red">Ali Khamenei</b> is held in <b className="purple">Iran</b>.
              <br />
              <br />
        
              We will not stop until we see <b className="purple">Iran</b> without islamic republic. <b className="purple">We will not compromise</b>.
              <br />
              <br />




              <b className="purple-bold">We Shall Prevail</b>
              <br />
              <br />
              <b className="purple-bold">Woman Life Freedom</b>
              <br />
              <b className="purple-bold">Human Life Liberty</b>
              
              {/* <br />
              <br />
              We are asking for your help to <b className="purple"> spread the word </b> and <b className="purple"> sign our petition </b> to help us. */}
              



              {/* We stand with <b className="purple">Ukranians</b> in fighting for <b className="purple">Liberty</b>.
              The great people of <b className="purple">Ukraine</b> have a <b className="purple">army</b> to defend themselves.
              We, the people of <b className="purple">Iran</b> have only <b className="purple">each other</b> to defend ourselves. */}


            </p>
          </Col>

          <Col md={4} className="myAvtar">
            {/* <img src="assets/20.jpeg" className="img-fuild" width={400} /> */}

            <img src="assets/زن زندگی آزادی/51.jpg" className="img-fluid" style={{ paddingTop: 40 }} />
          </Col>
            
        </Row>


        <Row>
          <Col md={12} className="home-about-social">
            <h1></h1>
            <p>
              <a href="iranianscholarsforliberty.com" className="purple">Iranian Scholars for Liberty</a> is a group of Iranian scholars who are fighting for the freedom of Iran.

            </p>
            {/* <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}



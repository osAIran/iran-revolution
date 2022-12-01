import React, { useState } from "react";
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

import {  HashLink } from 'react-router-hash-link';
import {
  MdOutlineTheaterComedy,
  MdHowToVote
}
from "react-icons/md";


export default function About() {

  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

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
              <b className="purple-bold">Women Life Freedom</b>
              <br />
              <b className="purple-bold">Human Life Liberty</b>




            </p>
          </Col>

          <Col md={4} className="myAvtar">
            {/* <img src="assets/20.jpeg" className="img-fuild" width={400} /> */}
            <div className="title"> Please sign    <HashLink className="petition-bold" smooth to="/petition" 
            
              onClick={() => updateExpanded(false)}

            >
              <MdHowToVote className="" style={{ marginBottom: "2px" }} />Our Petition 
              
            </HashLink> <div className="title-bold">Stand with us</div>
            </div>
            <img src="assets/زن زندگی آزادی/51.webp" className="img-fluid" style={{ paddingTop: 5 }} />



            <br />
            <br />


          </Col>

        </Row>


        <Row>
          <Col md={12} className="home-about-social">
            <h1></h1>
            <p>
              <a href="https://www.iranianscholarsforliberty.com/" className="purple">Iranian Scholars for Liberty</a> is a group of Iranian scholars who are fighting for the freedom of Iran.
            </p>


          </Col>
        </Row>
      </Container>
    </Container >
  );
}



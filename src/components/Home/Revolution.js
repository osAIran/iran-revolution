import React, { useEffect, useState, useRef } from "react";
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

import { HashLink } from 'react-router-hash-link';
import {
  MdOutlineTheaterComedy,
  MdHowToVote
}
  from "react-icons/md";

import { FaHandsHelping } from "react-icons/fa";


import { CSSTransition } from 'react-transition-group';
import GetImages from "../Gallery/Data";
import "./Revolution.css";

import { useTranslation } from 'react-i18next';

export default function About({ language }) {

  const { t, i18n } = useTranslation();

  const category = 'fa' == language || i18n.language == 'fa' ? 'fa' : 'all'
  const images = GetImages(category);

  const [image, setImage] = useState(images[0]);

  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  const currentLanguage = i18n.language;

  const isFa = currentLanguage === "fa";

  useEffect(() => {
    if (currentLanguage != language) {
      changeLanguage(language)
    }
    console.log(currentLanguage);

  }, [language]);



  useEffect(() => {
    const interval = setInterval(() => {
      setImage(images[Math.floor(Math.random() * images.length)]);
    }, 2500);
    return () => clearInterval(interval);
  }, [images]);

  return (

    <div style={{ position: "relative" }}>


      <Container fluid id="about">

        <Container>



          <Row md={8}>



            <Col className="main-title">


              <div >
                <img className="icon_img" style={{ padding: 0, justifyContent: "center" }}
                  src="https://ik.imagekit.io/hcdblkujo/icon.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1669948091459">
                </img>

                <div className="purple-revolution-title"> {t("We are People of Iran")}</div>
              </div>

              <p className="main-content">



                {t("We are fighting for")}  <b className="purple"> {t("gender equality, freedom speech, and freedom of religion")}</b> {t("END_FIGHT")}


                <br />
                <br />


                {t("We are fighting against systematic oppression of")} <b className="purple">{t("minorities and women")}</b> {t("END_FIGHT")}

                <br />
                <br />




                {t("We are fighting for")}   <b className="purple"> {t("children and future")} </b> {t("END_FIGHT")} {t("We are fighting against")} <span className="red-bold">{t("child murder, marriage")}</span><span className="red">{t("labor and abuse")} </span> <span className="purple-bold">{t("CHILDREN_FA")}</span> {t("END_FIGHT")}


                <br />
                <br />

                {t("We are fighting for")} <b className="purple-bold">{t("justice")}</b> {t("for crimes against humanity and we will not stop until the trial of ")}<b className="red"> {t(" Ali Khamenei")}</b> {t("is held in")}  <b className="purple"> {t("Iran")}</b> {t("end_justice")}

                <br />
                <br />
                {t("We will not stop until we see")} <b className="purple">{t("Iran")}</b> {t("without islamic republic")} <b className="purple">{t("We will not compromise")}</b>
                <br />
                <br />




                <b className="purple-bold">  {t("We Shall Prevail")}</b>
                <br />

                <b className="purple-bold"> {t("Women Life Freedom")}</b>
                <br />
                <b className="purple-bold"> {t("Human Life Liberty")}</b>



              </p>
            </Col>

            <Col md={4} className="myAvtar">
              {/* <img src="assets/20.jpeg" className="img-fuild" width={400} /> */}
              <div className="title">
               <span className="main-title">{t("Please sign")}</span>
                {
                  // if language is fa, skip petition
                  isFa ? null : <HashLink className="help" smooth to="/how-can-you-help-us" >
                    <FaHandsHelping style={{ marginBottom: "8px" }} /> {t("Our Petition")}

                  </HashLink>
                }
                <div className="title-bold"> {t("Stand with us")}</div>

                <div className="purple"> {t("For Azar")}</div>
                <div className="purple"> {t("END Zahak")}</div>

              </div>
              <div className="img-fluid" style={{ paddingTop: 5 }}>
                <CSSTransition nodeRef={nodeRef} in={inProp} timeout={2000}>

                  <img src={image} className="item" />
                </CSSTransition>

              </div>



              <br />
              <br />

            </Col>

          </Row>


          <Row>
            <Col md={12} className="home-about-social">
              <p>

                <a href="https://www.iranianscholarsforliberty.com/" className="purple">{t("Iranian Scholars for Liberty")}</a> {t("is a group of Iranian scholars who are fighting for the freedom of Iran")}

              </p>


            </Col>
          </Row>
        </Container>
      </Container ></div >
  );
}



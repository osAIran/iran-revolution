import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from 'react-i18next';


function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  const { t, i18n } = useTranslation()

  if (i18n.language == 'fa') {
    year = ""
  }

  return (
    <Container fluid className="footer" style={{ background: "transparent", justifyContent: "space-evenly" }}>
      <Row>
        <Col md="4" className="footer-copywright">
          <h3> {t("We are")} <span className="purple">{t("Revolutionary People, United")}</span> {t("all around the globe")}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3> {t("Copyright")} {year.toLocaleString("fa", {
            useGrouping: false

          })} {t("WLF")}</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3><a href="https://github.com/jinaamini/iran-revolution" className="purple">{t("Open Source and Openness")}</a></h3>
        </Col>
        {/* <Col md="4" className="footer-body"> */}
        {/* <ul className="footer-icons"> */}
        {/* <li className="social-icons">
              <a
                href="https://github.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/Soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul> */}
        {/* </Col> */}
      </Row>
    </Container>
  );
}

export default Footer;

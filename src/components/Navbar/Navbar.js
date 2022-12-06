import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { NavHashLink, HashLink } from 'react-router-hash-link';
import {

  AiTwotoneHeart
} from "react-icons/ai";

import {
  MdOutlineTheaterComedy,
  MdHowToVote
}

  from "react-icons/md";

import {
  GiVote,
  GiRevolt,
  GiCrimeSceneTape
}
  from "react-icons/gi";



import 'react-dropdown/style.css';

import { CgFileDocument } from "react-icons/cg";
import { useTranslation } from 'react-i18next';

import { Trans } from 'react-i18next';

import "./style.css";

function NavBar() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  const swapLanguage = () => {
    if (i18n.language === "fa") {
      changeLanguage("en")
    } else {
      changeLanguage("fa")
    }
  }

  const currentLanguage = i18n.language;

  // useEffect(() => {
  //   console.log(currentLanguage);
  //   changeLanguage("fa")
  // }, [currentLanguage]);

  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 30) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  const options = [
    'English', 'فارسی'
  ]

  const isFa = i18n.language === "fa"

  window.addEventListener("scroll", scrollHandler);


  const langText = isFa ? "EN" : "فارسی"

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="lg"

      className={navColour ? "sticky" : expand ? "navbar" : "navbar-transparent"}
    >
      <Container >
        <Navbar.Brand href="/" className="nav-brand"   >
          <img src="https://ik.imagekit.io/hcdblkujo/favi_icon_200x200.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669939942440" className="img-fluid logo" /> <b className="purple" style={{ paddingLeft: 40, paddingRight: 0 }}>
            {t("Women Life Freedom")}
          </b>


        </Navbar.Brand>



        <button className="button" onClick={() => { swapLanguage() }} > {langText} </button>
        {/* <span className="white">|</span> <button className="button" disabled={isFa} onClick={() => { changeLanguage("fa") }}  > فا </button> */}


        {/* <AudioPlayer urls={['assets/music/Barpakhiz.mp3', 'assets/music/سرود بیا از هنرمندان ناشناس.mp3', 'assets/music/سرود راه کوچه.mp3',
          'assets/music/Shapur Marg Bar Kolle Nezam.mp3', 'assets/music/ای زن ای سرود زندگی.mp3', 'assets/music/Shapur Marg Bar Kolle Nezam.mp3',
          'assets/music/Song4Leilas - soundcloud-1377138304.mp3', 'assets/music/zanam zanam zanam.mp3',
          'assets/music/دست در دستهم.mp3', 'assets/music/Barpakhiz.mp3', 'assets/music/Shapur Marg Bar Kolle Nezam.mp3']} /> */}


        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >



          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto" defaultActiveKey="/" style={{ padding: 0 }}>

            {/* <Nav.Item style={{ paddingTop: 12, paddingLeft: 12 }} >
              <HashLink smooth to="/petition" className="no-hyperlink"
                onClick={() => updateExpanded(false)}

              >
                <MdHowToVote style={{ marginBottom: "2px" }} /> EN | FA
              </HashLink>
            </Nav.Item> */}

            <Nav.Item style={{ paddingTop: 12, paddingLeft: 12 }} >
              <HashLink smooth to="/petition" className="no-hyperlink"
                onClick={() => updateExpanded(false)}

              >
                <MdHowToVote style={{ marginBottom: "2px" }} /> <Trans>Petition</Trans>
              </HashLink>
            </Nav.Item>

            <Nav.Item style={{ paddingTop: 12, paddingRight: 12, paddingLeft: 12 }} >
              <HashLink smooth to="/" className="no-hyperlink"
                onClick={() => updateExpanded(false)}

              >
                <GiRevolt style={{ paddingTop: 0 }} /> <Trans>Revolution</Trans>
              </HashLink>


              {/* <Nav.Link
                  as={Link}
                  to="#about"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link> */}
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/art"
                onClick={() => updateExpanded(false)}
                style={{ paddingLeft: 0, paddingTop: 12 }}
              >
                <MdOutlineTheaterComedy
                  style={{ marginBottom: "2px" }}
                />{" "}
                <Trans>Artwork</Trans>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/for"
                style={{ padding: 0 }}

                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> <Trans>For</Trans>
              </Nav.Link>
            </Nav.Item>


            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/our-loved-ones"
                style={{ padding: 0 }}

                onClick={() => updateExpanded(false)}
              >

                <div className="purple-navbar">
                  <AiTwotoneHeart className="purple-navbar" style={{ marginBottom: "2px", margin: 0 }} /> <Trans> Our Loved ones</Trans></div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                to="/future"
                as={Link}
              >
                <ImBlog style={{ marginBottom: "2px" }} /> <Trans>Future</Trans>
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default NavBar;

import React, { useState } from "react";
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

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src="https://ik.imagekit.io/hcdblkujo/favi_icon_200x200.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669939942440" className="img-fluid logo" /> <b className="purple" style={{ paddingLeft: 4 ,  paddingRight:0}}>Women Life Freedom</b>
        </Navbar.Brand>
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
          <Nav className="ms-auto" defaultActiveKey="#home" style={{padding:0}}>
            <Nav.Item style={{ paddingTop: 12 }} >
              <HashLink smooth to="/petition" className="no-hyperlink"
                onClick={() => updateExpanded(false)}

              >
                <MdHowToVote style={{ marginBottom: "2px" }} /> Petition
              </HashLink>
            </Nav.Item>

            <Nav.Item style={{ paddingTop: 12, paddingRight: 12, paddingLeft: 12 }} >
              <HashLink smooth to="/#about" className="no-hyperlink"
                onClick={() => updateExpanded(false)}

              >
                <GiRevolt style={{ paddingTop: 0 }} /> Revolution
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
                style={{padding:0}}
              >
                <MdOutlineTheaterComedy
                  style={{ marginBottom: "2px" }}
                />{" "}
                Artwork
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/lyrics"
                style={{padding:0}}

                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> For
              </Nav.Link>
            </Nav.Item>


            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/students-in-chains"
                style={{padding:0}}

                onClick={() => updateExpanded(false)}
              >

                <div className="purple-navbar">
                  <AiTwotoneHeart className="purple-navbar" style={{ marginBottom: "2px", margin: 0 }} />  Our Loved ones </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://www.iranianscholarsforliberty.com/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> ISL
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
    </Navbar>
  );
}

export default NavBar;

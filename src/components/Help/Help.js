
import "./Help.css";
import react, { useState, useEffect, useRef } from "react";

import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from "react-bootstrap";
import GetImages from "../Gallery/Data";
import { FaHandsHelping } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
import {
    MdOutlineTheaterComedy,
    MdHowToVote
}
    from "react-icons/md";

import Share from "./Share"

export default function Help() {

    const { t, i18n } = useTranslation();

    const images = GetImages('help');

    const [image, setImage] = useState(images[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setImage(images[Math.floor(Math.random() * images.length)]);
        }, 2500);
        return () => clearInterval(interval);
    }, [images]);

    const nodeRef = useRef(null);


    return (

        <div className="help-page">

            <Container   >

                <Container>

                    <Row md={10}>

                        <Col md={8} className="help-title">

                            <h1> How can you help us?</h1>
                            <h1 className="purple" style={{ marginTop: "0.6em" }}> <b>1. Sign our <HashLink className="help" smooth to="/petition" >
                                <MdHowToVote style={{ marginBottom: "10px" }} /> Petitions

                            </HashLink></b></h1>
                            <h3> Only <span className="purple">1,211,013</span> have signed so far</h3>
                            <h2> <b className="purple">You</b> can <span className="purple">make a difference</span> with only a few clicks</h2>
                            {/* <h3> If you signed, Thank you! This is great enough for us</h3> */}

                            <h1 className="purple" style={{ marginTop: "0.9em" }}> <b>2. Be our voice
                            </b></h1>
                            <h2> We <span className="purple">thank you</span> for signing our petitions</h2>
                            <h2> Please <span className="purple">share</span> in social media to <span className="purple">amplify our voices</span></h2>
                            
                            <Share/>

                            <h1 className="purple" style={{ marginTop: "0.9em" }}> <b>3. Donate to Trusted Human Right Organizations
                            </b></h1>
                            <h4> Please do not donate to UNICEF or other fake human right organizations.</h4>
                            {/* <h5>We have gathered a list of trusted human right organizations for Iran:</h5> */}

                            <Row md={3} style={{justifyContent:"center"}}>
                                {/* <button style={{}}> */}
                                <a href="https://hengaw.net/en" style={{ margin:"0.8em", padding:2}}>
                                <img src="assets/hengaw-logo.png" />
                                </a>
                                {/* </button> */}


                                <h3 style={{ justifyContent: "center" }}>

                                   <a href="https://hengaw.net/en" className="help">Hengaw </a> is one of the most trusted organizations that covers Kurdistan, where minorities are subject to the most cruel brutalities.
                                </h3>
                            </Row>

                        </Col>

                        <Col md={4}>
                            <div className="img-fluid" style={{ paddingTop: 5 }}>
                                {/* <CSSTransition nodeRef={nodeRef} in={inProp} timeout={2000}> */}
                                <h1><span className="purple">Be our voice </span>and <span className="purple">raise awareness</span></h1>
                                <h1 className="purple">Stand with us</h1>

                                <img src={image} className="item" />
                                {/* </CSSTransition> */}

                            </div>
                        </Col>

                    </Row>

                    {/* <Row md={8}>

                        <Col className="main-title">

                            <h1 className="title">{t('Help.title')}</h1>

                            <p className="subtitle">{t('Help.subtitle')}</p>

                        </Col>

                    </Row> */}

                </Container>

            </Container>

        </div>

    );
}
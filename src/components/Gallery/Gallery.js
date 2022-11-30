import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { Container, Row, Col, Button } from "react-bootstrap";

import { useEffect } from "react";
import './Gallery.css'
import GetImages from './Data.js'

export default function Gallery() {

    const images = GetImages()

    useEffect(() => {
        document.body.style.zoom = "90%";
      }, []);

    return (
        <div style={{paddingTop:80}}>

            <Container>

                <Row  >
                        {
                            images.map((item, index) => {
                                return (
                                    <Col >
                                    <div style={{padding:30}}>
                                    <img src={item}  className="image" />
                                    </div>
                                    </Col>
                                )
                            })

                        }


                </Row>
                {/* 
                // <div>
                //     <img src="assets/1.jpg" />
                //     <p className="legend">Legend 1</p>
                // </div>
                // <div>
                //     <img src="assets/2.jpeg" />
                //     <p className="legend">Legend 2</p>
                // </div>
                // <div>
                //     <img src="assets/3.jpeg" />
                //     <p className="legend">Legend 3</p>
                // </div> */}
            </Container>




        </div>
    )
}
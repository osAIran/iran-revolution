import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { Container, Row, Col, Button } from "react-bootstrap";

import { useEffect } from "react";
import './Gallery.css'
import GetImages from './Data.js'

export default function Gallery({ category = "all" }) {

    console.log(category)
    const images = GetImages(category)

    useEffect(() => {
        document.body.style.zoom = "90%";
    }, []);

    const chained_div = (
        <div>
            <Row style={{ justifyContent: "center" }}>
                <div className="title" style={{color:"white"}}> Only  <b className="purple">{images.length}</b>  out of <b className="purple">+15000</b> Prisoners</div>
            </Row>
            <Row style={{ justifyContent: "center" }} >
                <b className="sub-title"> Just for <b className="purple">peacefully</b> protesting</b>
            </Row>
        </div>
    )

    return (
        <div style={{ paddingTop: 80 }}>

            <Container>

                { category === "chain" ? chained_div : null}

                <Row  >
                    {
                        images.map((item, index) => {
                            return (
                                <Col >
                                    <div style={{ padding: 30 }}>
                                        <img src={item} className="image" />
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
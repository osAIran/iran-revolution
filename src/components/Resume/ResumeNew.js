import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/for_future.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://github.com/lrhm/petition-for-iran/raw/7b7396b98c94cd8d4ea757e052f4547ec01e5aca/src/Assets/for_future.pdf";


function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const files = [{

    title: "For the Future of Iran (Dutch, English)",
    url: "assets/baraye_dutch.pdf",
  },
  {
    title: "For the Future of Iran (German, English)",
    url: "assets/for_future.pdf",
  },
  {
    title: "In the Name of Rainbow God (Dutch, English)",
    url: "assets/rainbow_god.pdf",
  }
  ]

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>

          {files.map((file, index) => {
            return (
              <div
                md={3}
                style={{
                  padding: 20,
                }}>
                <Button

                  variant="primary"
                  href={file.url}
                  target="_blank"
                  style={{}}
                >
                  <AiOutlineDownload />
                  &nbsp;{file.title}
                </Button>
              </div>
            )

          })}


          {/* <Button
            variant="primary"
            href="assets/baraye_dutch.pdf"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Lyrics Dutch
          </Button> */}
        </Row>

        {
          files.map((file, index) => {
            return (
              <div
              >
                <Row className="resume">
                  <Document file={file} className="d-flex justify-content-center">
                    <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                  </Document>
                </Row>
                <Row className="resume">
                  <Document file={file} className="d-flex justify-content-center">
                    <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
                  </Document>
                </Row>
              </div>
            )

          })
        }



      </Container>
    </div>
  );
}

export default ResumeNew;

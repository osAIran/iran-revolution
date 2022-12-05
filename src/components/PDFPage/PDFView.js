import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/for_future.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";


import YouTubePlayer from "react-player/lib/players/YouTube";
import ReactPlayer from "react-player";
import './style.css'
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

  const lyrics = ["برای توی کوچه رقصیدن", "برای ترسیدن به وقت بوسیدن", "برای خواهرم خواهرت خواهرامون", "برای تغییر مغز ها که پوسیدن", "برای شرمندگی برای بی‌پولی", "برای حسرت یک زندگی معمولی", "برای کودک زباله گرد و آرزوهاش", "برای این اقتصاد دستوری", "برای این هوای آلوده", "برای ولیعصرو درختای فرسوده", "برای پیروزو احتمال انقراضش", "برای سگ‌های بی‌گناه ممنوعه", "برای گریه‌های بی‌وقفه", "برای تصویر تکرار این لحظه", "برای چهره‌ای که میخنده",
    "برای دانش آموزها برای آینده", "برای این بهشت اجباری", "برای نخبه‌های زندانی", "برای کودکان افغانی", "برای این همه برای غیر تکراری", "برای این همه شعارهای توخالی", "برای آوار خانه‌های پوشالی", "برای احساس آرامش", "برای خورشید پس از شبای طولانی", "برای قرص‌های اعصاب و بی‌خوابی", "برای مرد میهن آبادی", "برای دختری که آرزو داشت پسر بود", "برای زن زندگی آزادی", "برای آزادی", "برای آزادی", "برای آزادی",]

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ position: "relative", justifyContent: "center" }}>


          {/* <ReactPlayer className="video-player" url="https://youtu.be/aJb3uc1D1D8?t=65" /> */}


        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>



          <div className="main-lyrics ">

            {
              lyrics.map((lyric, index) => {
                return <p key={index}>{lyric}</p>
              })
            }
          </div>
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


        {/* {
          files.slice(1, 2).map((file, index) => {
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
        } */}

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


      </Container>
    </div>
  );
}

export default ResumeNew;

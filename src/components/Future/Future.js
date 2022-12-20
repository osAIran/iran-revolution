import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";

import "./future.css";

export default function Future() {

    const { t, i18n } = useTranslation();

    return (
        <div >
            <Container fluid className="future future-container">
                <Row>

                    <Col className="future-title">


                        <h1 >

                            <div><span className="purple">{t("Future")}</span> {t("for the")} <span className="purple">{t("Rightous")}</span> {t("is")} <span className="purple">{t("bright and transparent")}</span></div>
                            <div>
                                {t("and for the ")}<span className="red">{t("guilty ")}</span>
                                <span className="red">{t("dark and unforgiving")}</span>
                            </div>
                        </h1>

                    </Col>

                    {/*                     

                    <Col className="future-content">
                        <h2>
                            {t("Niels Bohr: The best weapon of a dictatorship is secrecy, but the best weapon of a democracy should be the weapon of openness.")}
                        </h2>

                    </Col> */}

                </Row>
                <Row md={8}>
                    <Col className="future-content">
                        <h2>
                            <span className="purple">{t("Digital Transparency")}</span>{t("Every financial, organizational, and legal transaction will be recorded and available for public scrutiny")}
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="future-content">
                        <h2>
                            {t("Niels Bohr: The best weapon of a dictatorship is secrecy, but the best weapon of a democracy should be the weapon of openness")}
                        </h2>
                    </Col>

                </Row>

                <Row>
                    <Col className="future-content">
                        <h2>
                            {t("Please check out ")}<a href="https://future.wearemahsaamini.com/" className="purple">{t("future forum")}</a> {t("for discussions on the future of the new Iran")}
                        </h2>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}
import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Revolution from "./Revolution";
import Type from "./Type";

import Petition from "../Petition/Petition";

function Home() {

  return (
    <section>
      
      <Petition />
      <Revolution />

    </section>
  );
}

export default Home;

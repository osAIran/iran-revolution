import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import About from "./About";
import Type from "./Type";

import HomePage from "./Homepage";

function Home() {

  return (
    <section>
      <HomePage />
      <About />

    </section>
  );
}

export default Home;

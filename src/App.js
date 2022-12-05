import React, { useState, useEffect, Suspense } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Revolution from "./components/Home/Revolution";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Lyrics from "./components/PDFPage/PDFView";
import Gallery from "./components/Gallery/Gallery";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particle from "./components/Particle";


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Suspense fallback="loading">
        <Preloader load={load} />

        <div className="App" id={load ? "no-scroll" : "scroll"}>

          <Navbar />.
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Revolution />} />
            <Route path="/fa" element={<Revolution language="fa" />} />
            <Route path="/en" element={<Revolution language="en" />} />

            <Route path="/Petition" element={<Home />} />
            <Route path="/You-can-help-us" element={<Home />} />
            {/* <Route path="/project" element={<Projects />} /> */}
            <Route path="/About" element={<Revolution />} />
            <Route path="/For" element={<Lyrics />} />
            <Route path="/Art" element={<Gallery />} />
            <Route path="/Our-loved-ones" element={<Gallery category={"chain"} />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          <Footer />
          <Particle />

          <div>
            <img className="bg-repeat" src="assets/15.webp" style={{ position: "absolute", left: 20, bottom: -20 }}>
            </img>
          </div>

        </div>
      </Suspense>
    </Router>
  );
}

export default App;

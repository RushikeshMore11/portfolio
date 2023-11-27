import React from "react";

import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import { ParallaxType } from "./components/constants";

function App() {
  return (
    <>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type={ParallaxType.services} />
      </section>
      <section>Services</section>
      <section id="Portfolio">
        <Parallax type={ParallaxType.portfolio} />
      </section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Parallax</section>
      <section>Contact us</section>
      <section id="About">Contact us</section>
      {/* <Test /> */}
    </>
  );
}

export default App;

import React from "react";

import "./app.scss";
import Navbar from "./components/navbar/Navbar";
// import Test from "./components/navbar/Test";

function App() {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>Parallax</section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Parallax</section>
      <section>Portfolio</section>
      <section>Contact us</section>
      {/* <Test /> */}
    </>
  );
}

export default App;

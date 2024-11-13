import { useRef } from "react";
import { About } from "./components/About/About";
import { Banner } from "./components/Banner/Banner";
import { Header } from "./components/Header/Header";
import { Portfolio } from "./components/Portfolio/Portfolio";

import "./assets/styles/globals.scss";

function App() {
  const bannerRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  // const contactRef = useRef(null);

  const refsData = { bannerRef, aboutRef, portfolioRef };

  return (
    <div className="main">
      <Header refsData={refsData} />
      <Banner ref={bannerRef} />
      <About ref={aboutRef} />
      <Portfolio ref={portfolioRef} />
    </div>
  );
}

export default App;

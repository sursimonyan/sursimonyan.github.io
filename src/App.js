import { useRef } from "react";
import { About } from "./components/About/About";
import { Banner } from "./components/Banner/Banner";
import { Header } from "./components/Header/Header";
import { Works } from "./components/Works/Works";

import "./assets/styles/globals.scss";

function App() {
  const bannerRef = useRef(null);
  const aboutRef = useRef(null);
  const worksRef = useRef(null);
  // const contactRef = useRef(null);

  const refsData = { bannerRef, aboutRef, worksRef };

  return (
    <div className="main">
      <Header refsData={refsData} />
      <Banner ref={bannerRef} />
      <About ref={aboutRef} />
      <Works ref={worksRef} />
    </div>
  );
}

export default App;

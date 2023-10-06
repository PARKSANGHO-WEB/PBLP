import "./App.scss";
import "./styles/variables.scss";
import Router from "./components/Router";
import gsap from "gsap";
import {useRef, useEffect} from "react";
import React from "react";

import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



function App() {
  const number = useRef(null);

  useEffect(() => {
    gsap.to(".black-box", {
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '.section01',
        start: 'top top',
        scrub: true
      }
    });
    // Section 1 H2
    gsap.from("#h2", {
      scrollTrigger: {
        trigger: "#h2",
        start: "top bottom",
        end: "top 400px",
        // start: "top",
        // end: 'bottom',
        scrub: 1,
        // toggleActions: "play complete none reset"
      },
      xPercent: -100,
      opacity: 0,
    });
    // Execution heading
    gsap.from("#h3", {
      scrollTrigger: {
        trigger: "#h3",
        start: "top bottom+=100px",
        // scrub: true
        toggleActions: "play complete none reset",
      },
      xPercent: 100,
      opacity: 0.5,
      duration: 1
    });
    // Custom trigger
    ScrollTrigger.create({
      trigger: "#h3",
      start: "top bottom+=-200px", // 200px after the top passes the bottom of the viewport
      endTrigger: '#section2',
      end: "bottom top",
      onUpdate: (self) => {
        const progress = Math.max(2, Math.ceil(self.progress * 100)); //No lower than 2.
        number.current.innerHTML = progress;
        // console.log(
        //   "progress:",
        //   self.progress.toFixed(3),
        //   "direction:",
        //   self.direction,
        //   "velocity",
        //   self.getVelocity()
        // );
      },
    });

    ScrollTrigger.refresh()


  }, []);


  return (
    <div className='App'>
      <Router />

    <main>
      <div className="section section01">
        <div className="black-box"></div>
        <div className="main-box">
          <h1 className="main-title">PBLP'S<br/>PORTFOLIO</h1>
          <span className="main-sub">퍼블리셔  박상호의 자기소개서</span>
        </div>
        <span className="scrollDown">SCROLL DOWN</span>
      </div>
      <div className="section section02">
        <h2 id="h2">The idea is step 1.</h2>
      </div>
      <section id="section2" className="height100">
        <h2 id="h3">
          Execution is steps <span ref={number}>2</span>.
        </h2>
      </section>
    </main>
    </div>
  );
}

export default App;
import React from "react";

import {useEffect} from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";

export default function Router() {

  useEffect(() => {
    // Execution heading
    const showAnim = gsap.from("#header", {
      yPercent: -100,
      paused: true,
      duration: 0.2
    }).progress(1);
    // Custom trigger
    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    });

    ScrollTrigger.refresh()


  }, []);

  return (
    <BrowserRouter>
      <div className="header" id="header">
        <div className="logo_box">
          <a className="logo" href="/">
            <span>PBLP.</span>
          </a>
        </div>

      </div >
      </BrowserRouter>
  );
}
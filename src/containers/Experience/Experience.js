import React from "react";
import Particles from "react-particles-js";

import "./Experience.scss";
import Banner from "../../components/Banner/Banner";
import Timeline from "../../components/Timeline/Timeline";

const Experience = () => {
  return (
    <>
      <Particles
        params={{
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <Banner />
      <section className="section experience-section">
        <div className="wrapper">
          <article className="center">
            <h1>Experience</h1>
          </article>
          <article className="timeline-container">
            <Timeline />
          </article>
        </div>
      </section>
    </>
  );
};

export default Experience;

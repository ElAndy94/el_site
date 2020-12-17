import React from "react";
import Particles from "react-particles-js";

import Banner from "../../components/Banner/Banner";
import "./Home.scss";

function Home() {
  return (
    <div className="page-container">
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
      <section className="section">
        <div className="wrapper">
          <article className="home-container">
            <h1>Welcome!</h1>
            <p>My name is Andrew Peliza, I am a Software Engineer.</p>
            <p>
              A passion for development with an added bonus of a First Class
              Honours Degree in Computer Science.
            </p>
            <p>
              Diverse set of skills ranging from; HTML5, CSS/SCSS(Sass),
              JavaScript (Express, Node.js, Angular.js, Vue.js, React.js
              (Redux), TypeScript), GatsbyJS, jQuery, Python, AWS, PHP, SQL, and
              basic knowledge of other languages...
            </p>
            {/* <p>
              I enjoy challenges and consider myself an enterprising individual
              who likes to take risks and use my own initiative.
            </p>
            <p>
              Approachable personality in which I can socialise well with the
              public and work well in a team.
            </p> */}
          </article>
        </div>
      </section>
    </div>
  );
}

export default Home;

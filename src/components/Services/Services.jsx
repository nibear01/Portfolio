// import { useRef } from "react";
import "./services.scss";
// Animations removed for simplicity

const Services = () => {
  // Smooth in-view animation handled via `viewport` on container

  return (
    <div className="services">
      <div className="textContainer">
        <p>
          I focus on delivering high-quality services
          <br /> to meet your needs.
        </p>
        <hr></hr>
      </div>
      <div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" loading="lazy" />
          <h1>
            <b>Unique </b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>for Your</b> Bussiness.
          </h1>
          <button>EXPLORE MORE?</button>
        </div>
      </div>
      <div className="listContainer">
        <div className="listContainer">
          <div className="box">
            <h2>Web Development</h2>
            <p>
              I build fast, responsive, and modern websites using MERN, Next.js,
              and clean UI/UX principles. From landing pages to full-stack web
              apps, I create systems that perform flawlessly across all devices.
            </p>
            <button>LEARN MORE</button>
          </div>

          <div className="box">
            <h2>UI / UX Design</h2>
            <p>
              I design visually appealing and user-centered interfaces. My focus
              is creating intuitive layouts, modern visuals, and smooth user
              journeys that match your brand identity.
            </p>
            <button>LEARN MORE</button>
          </div>

          <div className="box">
            <h2>Backend Engineering</h2>
            <p>
              I create scalable and secure backend systems using Node.js,
              Express, and MongoDB. APIs, authentication, databases, payment
              integration—everything optimized and production-ready.
            </p>
            <button>LEARN MORE</button>
          </div>

          <div className="box">
            <h2>Brand Identity</h2>
            <p>
              I help businesses define their visual presence: logos, color
              palettes, content guidelines, and overall brand personality—
              crafted to be memorable and consistent everywhere.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

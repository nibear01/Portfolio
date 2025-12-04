import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "AllMall - E-commerce Website",
    img: "/allmall.png",
    desc: "AllMall is a full-stack ecommerce web application developed as part of the CSE470 Software Engineering course. Built using the MERN stack (MongoDB, Express.js, React, Node.js), it follows the Model-View-Controller (MVC) architecture to provide a scalable and maintainable codebase.",
    src: "https://allmall-frontend.onrender.com/",
  },
  {
    id: 2,
    title: "BoiBilash - Online Bookstore",
    img: "/boibilash.png",
    desc: "An end-to-end bookstore application with a Node.js/Express API, MongoDB database, and a React + Vite frontend.",
    src: "#",
  },
];

const Single = ({ item }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section className="single">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" loading="lazy" />
          </div>
          <motion.div className="textContainer" style={{ y: y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => window.open(item.src, "_blank")}>
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

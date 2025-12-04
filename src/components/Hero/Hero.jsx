import { motion } from "framer-motion";
import "./Hero.scss";

const textVariants = {
  inital: { x: "-500", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const sliderVariants = {
  inital: { x: 0 },
  animate: {
    x: "-220%",
    opacity: 1,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
      repeatType: "mirror",
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="inital"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>NAVED ABRAR NIBIR</motion.h2>
          <motion.h1 variants={textVariants}>MERN Stack Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              onClick={() => {
                const el = document.getElementById("Portfolio");
                if (el)
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              See My Works
            </motion.button>
            <motion.button
              variants={textVariants}
              onClick={() => {
                const el = document.getElementById("Contact");
                if (el)
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.img
            src="/scroll.png"
            variants={textVariants}
            animate="scrollButton"
            alt="scroll"
            className="scrollIcon"
          />
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContiner"
        variants={sliderVariants}
        initial="inital"
        animate="animate"
      >
        Skilled in building responsive, user-friendly interfaces.
      </motion.div>
      <div className="imageContainer">
        <img src="/me.png" alt="hero" loading="lazy" />
      </div>
    </div>
  );
};

export default Hero;

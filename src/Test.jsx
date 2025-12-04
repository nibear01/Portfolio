import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0.7, scale: 0.7 },
  };
  return (
    // <div className="test-container">
    //   <motion.div
    //     className="test"
    //     initial={{ opacity: 0.7, scale: 0.7, x: 0, y: 0 }}
    //     // animate={{ opacity: 1, scale: 1, x: 200, y: 100 }}
    //     transition={{ duration: 0.5, ease: "easeInOut" }}
    //     // whileHover=D{{opacity: 1, scale: 1, rotate: 10}}
    //     whileInView={{ opacity: 1, scale: 2 }}
    //     drag
    //   ></motion.div>
    // </div>

    <div className="test-container">
      <motion.div
        className="test"
        variants={variants}
        // initial="hidden"
        // animate="visible"
        animate={open ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <button className="test-button" onClick={() => setOpen(!open)}>test</button>
    </div>
  );
};

export default Test;

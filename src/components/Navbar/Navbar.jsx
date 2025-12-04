import Sidebar from "../Sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Naved
        </motion.span>
        <div className="social">
          {/* <a href="">
            <img href="" src="/facebook.png" alt="facebook" />
          </a> */}
          <a href="https://www.linkedin.com/in/naved-abrar-nibir-852121300/">
            <img src="/linkedin.png" alt="linkedin" />
          </a>
          <a href="https://github.com/nibear01">
            <img href="" src="/github.png" alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

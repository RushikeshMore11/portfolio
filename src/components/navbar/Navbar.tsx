import { LinkedIn, GitHub } from "@mui/icons-material";
import { motion } from "framer-motion";

import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Rushikesh More
        </motion.span>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/rushikesh-more-241406107/"
            target="_blank"
            rel="noreferrer"
            className="icons "
          >
            <LinkedIn className="text-[#0A66C2]" />
          </a>
          <a
            href="https://github.com/RushikeshMore11"
            target="_blank"
            rel="noreferrer"
            className="icons text-black "
          >
            <GitHub className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

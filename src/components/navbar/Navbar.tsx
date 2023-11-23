import { LinkedIn, GitHub } from "@mui/icons-material";

import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <div className="wrapper">
        <span>Rushikesh More</span>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/rushikesh-more-241406107/"
            target="_blank"
            rel="noreferrer"
            className="icons "
          >
            <LinkedIn className="text-[#0A66C2]"/>
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

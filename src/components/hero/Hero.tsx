import "./hero.scss";
import { motion } from "framer-motion";
import { images } from "../assets";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrap">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Software Developer</motion.h2>
          <motion.h1 variants={textVariants}>
            Software Development Engineer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See my latest Work
            </motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
          </motion.div>
          <motion.img
            animate="scrollButton"
            variants={textVariants}
            src={images.Scroll}
            alt="Scroll"
            className="bg--white"
          />
        </motion.div>
      </div>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="scrollTextContainer"
      >
        Problem Solver &nbsp; &nbsp;Developer Fast Pacer
      </motion.div>
      <div className="imageContainer">
        <img src={images.Hero} alt="Profile" id="profile" />
      </div>
    </div>
  );
};

export default Hero;

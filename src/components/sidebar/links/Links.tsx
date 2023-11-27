import React from "react";
import { motion } from "framer-motion";

const variant = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariant = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const links = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  return (
    <motion.div className="links" variants={variant}>
      {links.map((item) => {
        return (
          <motion.a
            whileHover={{ scale: 1.2 }}
            href={`#${item}`}
            variants={itemVariant}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default Links;

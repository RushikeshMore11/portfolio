import React, { useState } from "react";
import { motion } from "framer-motion";

const Test = () => {
  const [open, setOpen] = useState<boolean>(false);

  const variant = {
    visible: {
      opacity: 1,
      x: 600,
      transition: { type: "spring", stiffness: 100 },
    },
    hidden: { opacity: 0.5 },
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <motion.div
        // initial={{ opacity: 0.5, scale: 0.5 }}
        variants={variant}
        animate={open ? "visible" : "hidden"}
        // drag
        // transition={{ duration: 3, type: "tween" }}
        className="h-[200px] w-[200px] bg-white"
      ></motion.div>
      <button className="bg-black w-3" onClick={() => setOpen((prev) => !prev)}>
        {" "}
        Click
      </button>
    </div>
  );
};

export default Test;

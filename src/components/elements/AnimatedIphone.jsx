import React from "react";
import { motion } from "framer-motion";

const AnimatedIphone = ({ items, delay = 0 }) => {
  const screenVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: delay + 0.2 },
    },
  };

  return (
    <div className="iphone animate-on-scroll">
      <motion.div
        className="screen p-6 "
        variants={screenVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedIphone;

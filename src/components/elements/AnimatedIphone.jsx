import React from "react";
import { motion } from "framer-motion";

const AnimatedIphone = ({ items, delay = 0 }) => {
  const iphoneVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay },
    },
  };

  const screenVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: delay + 0.8 },
    },
  };

  return (
    <motion.div
      className="iphone"
      variants={iphoneVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="screen p-6 "
        variants={screenVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Render items her */}
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedIphone;

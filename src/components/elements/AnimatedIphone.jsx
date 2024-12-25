import { motion } from "framer-motion";
import React from "react";

const AnimatedIphone = ({ items, delay = 0 }) => {
  // Animation for iPhone-containeren
  const iphoneVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay },
    },
  };

  // Animation for listen (indholdet)
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: delay + 0.8,
      },
    },
  };

  // Animation for hvert element
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
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
      <motion.ul
        className="content flex flex-col gap-4"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {items.map((item, index) => (
          <motion.li key={index} variants={itemVariants}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default AnimatedIphone;

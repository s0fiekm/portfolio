import { motion } from "framer-motion";

const AnimatedIphone = ({ children, delay = 0 }) => {
  // Animation for iPhone-containeren (baggrundsbilledet)
  const iphoneVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay }, // Bruger forsinkelse
    },
  };

  // Animation for skærmen (indholdet)
  const screenVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: delay + 0.8 }, // Skærmen efter containeren
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
        className="screen"
        variants={screenVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedIphone;

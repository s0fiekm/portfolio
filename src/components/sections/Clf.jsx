import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Clf() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = [
    {
      src: "/img/clf1.avif",
      x: "50%",
      y: "35%",
      width: "40%",
      maxWidth: "600px",
      delay: 0,
    },
    {
      src: "/img/clf2.avif",
      x: "-100%",
      y: "15%",
      width: "25%",
      maxWidth: "400px",
      delay: 0.5,
    },
    {
      src: "/img/clf3.avif",

      x: "90%",
      y: "-100%",
      width: "20%",
      maxWidth: "300px",
      delay: 1,
    },
  ];

  const variants = {
    hidden: { x: "0%", y: "0%" },
    visible: (custom) =>
      isLargeScreen
        ? {
            x: custom.x,
            y: custom.y,
            transition: { duration: 1, delay: custom.delay || 0 },
          }
        : {},
  };

  return (
    <section
      className={`${
        isLargeScreen
          ? "lg:h-screen w-screen flex lg:justify-center lg:items-center relative"
          : "grid grid-cols-1 gap-4"
      }`}
    >
      <h2 className="lg:top-20 lg:left-20 lg:text-7xl font-black lg:absolute max-w-2xl text-center">
        Copenhagen Light Festival
      </h2>
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image.src}
          alt={`Image ${index + 1}`}
          initial={isLargeScreen ? "hidden" : false}
          animate={isLargeScreen ? "visible" : false}
          className={`${
            isLargeScreen ? "absolute" : "w-full h-auto object-cover mx-auto"
          }`}
          custom={image}
          variants={variants}
          style={{
            width: isLargeScreen ? images[index].width : "100%",
            maxWidth: isLargeScreen ? images[index].maxWidth : "none",
            height: isLargeScreen ? "auto" : "100vh",
            objectFit: "cover",
          }}
        />
      ))}
    </section>
  );
}

export default Clf;

import React, { useState, useEffect } from "react";
import AnimatedIphone from "../elements/AnimatedIphone.jsx";

const Girltalk = () => {
  const iphoneContent = [
    [
      <img src="/img/drink.svg" alt="Drink no thanks" />,
      <img src="/img/message.svg" alt="Digital message with text" />,
    ],
    [
      <q className="text-girltalkBlue">
        Selvom jeg har venner, føler jeg mig tit ensom.
      </q>,
      <q className="text-girltalkBlue">
        Jeg har fået diagnosen autisme, så jeg føler anderledes end de andre
      </q>,
    ],
    [
      <h3 className="text-girltalkRed text-giriltalkRed font-bold text-2xl text-center">
        Ingen fortjener at stå alene
      </h3>,
      <img src="/img/together.svg" alt="Digital message with text" />,
    ],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % iphoneContent.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [iphoneContent.length]);

  return (
    <section className="lg:grid lg:grid-cols-8 relative lg:auto-rows-1fr">
      <div className="absolute">
        <h2 className="text-[20rem] text-outline">Girltalk</h2>
      </div>
      <video src="/video/girltalk.mp4" autoPlay muted controls loop></video>
      <article
        className="
        grid items-center justify-center py-6 -z-50
        lg:col-start-3 lg:col-span-3 lg:row-span-2"
      >
        <AnimatedIphone delay={0} items={iphoneContent[currentIndex]} />
      </article>
    </section>
  );
};

export default Girltalk;

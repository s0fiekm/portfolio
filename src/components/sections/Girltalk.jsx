import React from "react";
import AnimatedIphone from "../elements/AnimatedIphone.jsx";

const Girltalk = () => {
  // Definer indhold til hver iPhone
  const firstSection = [
    <img src="/img/drink.svg" alt="Drink no thanks" />,
    <img src="/img/message.svg" alt="Digital message with text" />,
  ];

  const secondSection = [
    <q className="text-girltalkBlue">
      Selvom jeg har venner, føler jeg mig tit ensom.
    </q>,
    <q className="text-girltalkBlue">
      Jeg har fået diagnosen autisme, så jeg føler anderledes end de andre
    </q>,
  ];

  const thirdSection = [
    <h3 className="text-giriltalkRed font-bold text-2xl text-center">
      Ingen fortjener at stå alene
    </h3>,
    <img src="/img/together.svg" alt="Digital message with text" />,
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-2">
      <div className="text-3xl lg:col-start-1 lg:row-start-1">
        <h2 className="font-black ">Girltalk</h2>
      </div>

      <article className="bg-girltalk flex justify-center items-center lg:col-start-2 col-span-2 lg:row-start-1 ">
        <AnimatedIphone delay={0} items={firstSection} />
      </article>

      <article className="bg-girltalk lg:col-start-1 grid justify-center items-center ">
        <AnimatedIphone delay={0.5} items={secondSection} />
      </article>

      <article className="bg-girltalkPink grid items-center justify-center bg-girltalk lg:col-start-1  py-6">
        <AnimatedIphone delay={1} items={thirdSection} />
      </article>
      <video
        className="lg:col-start-1 lg:col-span-3"
        src="/video/girltalk.mp4"
        controls
        autoPlay
        muted
        loop
      ></video>
    </section>
  );
};

export default Girltalk;

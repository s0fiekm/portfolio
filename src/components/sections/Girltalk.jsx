import React from "react";
import AnimatedIphone from "../elements/AnimatedIphone.jsx";

const Girltalk = () => {
  // Definer indhold til hver iPhone
  const peachItems = [
    <img src="/img/drink.svg" alt="Drink no thanks" />,
    <img src="/img/message.svg" alt="Digital message with text" />,
  ];

  const lightBlueItems = [
    <q className="text-girltalkBlue">
      Selvom jeg har venner, føler jeg mig tit ensom.
    </q>,
    <q className="text-girltalkBlue">
      Jeg har fået diagnosen autisme, så jeg føler anderledes end de andre
    </q>,
  ];

  const pinkItems = [
    <h3 className="text-giriltalkRed font-bold text-2xl text-center">
      Ingen fortjener at stå alene
    </h3>,
    <img src="/img/together.svg" alt="Digital message with text" />,
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3">
      <div className="bg-girltalkBlue py-20 lg:col-span-3 pl-6">
        <h2 className="lg:text-8xl font-black text-primary">Girltalk</h2>
      </div>

      <article className="bg-girltalkPeach grid items-center justify-center   py-6">
        <AnimatedIphone delay={0} items={peachItems} />
      </article>

      <article className="bg-girltalkLightBlue grid justify-center items-center ">
        <AnimatedIphone delay={0.5} items={lightBlueItems} />
      </article>

      <article className="bg-girltalkPink grid items-center justify-center  py-6">
        <AnimatedIphone delay={1} items={pinkItems} />
      </article>
    </section>
  );
};

export default Girltalk;

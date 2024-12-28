import React from "react";

function Clf() {
  return (
    <section className=" grid grid-cols-1 lg:grid-cols-3 lg:auto-rows-1fr gap-x-2 gap-y-2 ">
      <div className=" z-50 lg:col-start-1 lg:row-start-1 flex items-center">
        <h2 className=" lg:text-3xl font-black text-secondary  ">
          Copenhagen Light Festival
        </h2>
      </div>

      <img
        className="lg:col-start-3 animate-on-scroll lg:row-start-1 animate-on-scroll"
        src="/img/clf1.avif"
        alt="Copenhagen Light Festival on computer"
      />

      <img
        className="lg:col-start-2 animate-on-scroll lg:row-start-3 animate-on-scroll"
        src="/img/clf2.avif"
        alt="Copenhagen Light Festival on computer"
      />

      <img
        className=" animate-on-scroll lg:col-start-1 lg:row-start-6 animate-on-scroll"
        src="/img/clf3.avif"
        alt="Copenhagen Light Festival on computer"
      />
      <div class=" animate-on-scroll macbook-mockup relative lg:col-start-2 lg:col-span-2 lg:row-span-2 lg:row-start-4 bg-[#bed0da] flex justify-center p-20 animate-on-scroll">
        <img class="macbook-image" src="/img/clf4.png" alt="MacBook Mockup" />
        <div class="absolute screen-wrapper  overflow-hidden">
          <img
            class="scrolling-screenshot absolute w-full h-auto animate-scroll"
            src="/img/clfprototype.avif"
            alt="Scrolling Screenshot"
          />
          <img
            class="scrolling-screenshot absolute w-full h-auto"
            src="/img/clfprototype.avif"
            alt="Scrolling Screenshot"
          />
        </div>
      </div>
    </section>
  );
}

export default Clf;

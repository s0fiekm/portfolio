import React from "react";

function Clf() {
  return (
    <section className=" grid grid-cols-1 lg:grid-cols-3 lg:auto-rows-1fr gap-x-2 gap-y-2">
      <div className=" z-50 lg:col-start-1 lg:row-start-1 flex items-center">
        <h2 className=" lg:text-3xl font-black text-secondary  ">
          Copenhagen Light Festival
        </h2>
      </div>

      <div className="lg:col-start-3 lg:row-start-1">
        <img src="/img/clf1.avif" alt="Copenhagen Light Festival on computer" />
      </div>
      <div className="lg:col-start-3 lg:row-start-2">
        <img src="/img/clf2.avif" alt="Copenhagen Light Festival on computer" />
      </div>
      <div className="lg:col-start-1 lg:row-start-3">
        <img src="/img/clf3.avif" alt="Copenhagen Light Festival on computer" />
      </div>
      <div className="lg:col-start-2 lg:row-start-3 bg-[#bed0da] flex justify-center p-20">
        <img
          src="/img/clf4.png"
          alt="Copenhagen Light Festival on computer"
          className="object-contain"
        />
      </div>
    </section>
  );
}

export default Clf;

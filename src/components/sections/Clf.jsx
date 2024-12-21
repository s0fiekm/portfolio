function Clf() {
  return (
    <section className="grid lg:grid-cols-2 h-screen  lg:grid-rows-[repeat(4,1fr)] lg:gap-y-6">
      <h2 className="lg:text-8xl font-black lg:col-start-1 lg:row-start-1 	justify-self-center">
        Copenhagen Light Festival
      </h2>

      <div className="lg:col-start-2 lg:row-start-2 lg:row-span-2 place-self-start max-w-2xl">
        <img
          src="/img/clf1.avif"
          alt="Copenhagen Light Festival image"
          className="object-contain w-full max-h-screen"
        />
      </div>
      <div className="col-start-1 place-self-center justify-self-center row-start-2 row-span-2 max-w-md ">
        <img
          src="/img/clf2.avif"
          alt="Copenhagen Light Festival image"
          className="object-contain w-full max-h-screen"
        />
      </div>
      <div className="lg:col-start-2  lg:row-start-1  place-self-start p-16 justify-self-center bg-[#8D67FB]   max-w-sm ">
        <img
          src="/img/clf3.avif"
          alt="Copenhagen Light Festival image"
          className="object-contain w-full max-h-screen"
        />
      </div>
    </section>
  );
}

export default Clf;

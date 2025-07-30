import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen" initial="hidden" animate="visible">
      <video
        autoPlay
        loop
        muted
        className="absolute rotate-180 lg:top-[-360px] top-[-400px] left-0 z-[1]  lg:object-cover h-full w-full"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <div className="relative z-10 p-8 text-center text-white">
        <h1 className="text-4xl sm:text-6xl font-bold">Hero Section</h1>
      </div>
    </section>
  );
};

export default Hero;
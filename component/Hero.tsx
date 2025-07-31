import React from 'react';
import HeroContent from './content/HeroContent';

const Hero = () => {
  return (
    <section className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        loop
        muted
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent/>
      <div className="relative z-10 p-8 text-center text-white">
        <h1 className="text-4xl sm:text-6xl font-bold">Hero Section</h1>
      </div>
    </section>
  );
};

export default Hero;
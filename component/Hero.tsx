import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-[#000319]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-8 text-center text-white">
        <h1 className="text-4xl sm:text-6xl font-bold">Hero Section</h1>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';

const Index = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow relative">
          <img src="src/assets/photo-1460317442991-0ec209397118.avif" alt="Full screen" className="w-full h-screen object-cover mt-14" style={{ height: 'calc(100vh - 4rem)' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
            <p className="text-xl md:text-3xl font-bold mb-4">One Comprehensive Solution for Your Property Management Needs</p>
            <p className="text-sm md:text-base">Habitalink simplifies and automates house management, empowering you to maximize your portfolio's potential and allowing you to focus on what truly matters.</p>  
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mt-10 md:mt-20 px-4">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <img src="src/assets/photo-1560448204-e02f11c3d0e2.avif" alt="" className="rounded-lg mx-auto" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
        </div>
        <div className="w-full md:w-1/2 dark:text-white">
          <p className="text-sm md:text-base">Do everything on one easy-to-use, secure, and reliable platform.</p> 
          <p className="text-xl md:text-2xl mt-4">Comprehensive property management software for any portfolio.</p>
          <p className="mt-4 text-sm md:text-base">Property managers and owners use Habitalink to simplify, automate, and grow their businesses.</p>
        </div>
      </div>

      <div className="bg-blue-800 mt-10 md:mt-20 pt-10 pb-10 text-white text-center">
        <p className="mb-4 text-sm md:text-base">Put your portfolio on autopilot.</p>
        <p className="font-bold text-xl md:text-3xl mt-10">Why Habitalink?</p>
        <p className="mt-5 mx-4 md:mx-20 lg:mx-80 text-sm md:text-base">We care about you and your business, and everything we do is specifically designed to set you up for success. We equip you with a powerful foundation for profits, organization, and growth.</p>
      </div>

      <div className="text-center mt-10">
        <h2 className="text-xl md:text-2xl">No matter what properties you manage, we’ve got you covered.</h2>
        <p className="mb-10 text-sm md:text-base">Scale your business efficiently with a centralized system that supports your entire portfolio.</p>
      </div>

      <div className="flex flex-wrap justify-center mx-4 md:mx-20">
        {[
          { src: "src/assets/Single_Family.png", alt: "Single Family", text: "Single-Family" },
          { src: "src/assets/Multifamily.png", alt: "Multi Family", text: "Multi Family" },
          { src: "src/assets/Affordable_Housing.png", alt: "Affordable Housing", text: "Affordable Housing" },
          { src: "src/assets/CA.png", alt: "Community Association", text: "Community Association" }
        ].map(({ src, alt, text }) => (
          <div key={alt} className="flex flex-col items-center w-1/2 md:w-1/4 mb-10">
            <img src={src} alt={alt} className="w-24 h-auto sm:w-32 md:w-48 lg:w-56 mx-auto" />
            <p className="mt-2 text-sm md:text-base">{text}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center mx-4 md:mx-20 mb-20">
        {[
          { src: "src/assets/Student_Housing.png", alt: "Student Housing", text: "Student Housing" },
          { src: "src/assets/Commercial.png", alt: "Commercial", text: "Commercial" },
          { src: "src/assets/Investment_Manager.png", alt: "Investment Manager", text: "Investment Manager" }
        ].map(({ src, alt, text }) => (
          <div key={alt} className="flex flex-col items-center w-1/2 md:w-1/4 mb-10">
            <img src={src} alt={alt} className="w-24 h-auto sm:w-32 md:w-48 lg:w-56 mx-auto" />
            <p className="mt-2 text-sm md:text-base">{text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Index;

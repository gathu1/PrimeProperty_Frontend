import React from 'react';

const About = () => {
  return (
    <div className="pt-10 px-4 md:px-8 lg:px-16">
      {/* Mission Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start mt-10">
        {/* Left Column */}
        <div className="w-full md:w-1/2 mt-10 md:mt-40 md:ml-10">
          <h4 className="text-lg font-semibold text-green-600">OUR MISSION</h4>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-5">Habitalink is on a mission to make your <br /> life easier</h2>
          <button className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">Request A Demo</button>
        </div>
        {/* Right Column */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 ">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-10">Your growth is our goal</h2>
          <p className="text-base md:text-lg mb-4">
            DoorLoop was founded by property managers and landlords who wanted to save time, make more money, and grow their portfolios. When it became clear there was no easy, affordable, all-in-one software to help them, they decided to create it themselves.
          </p>
          <p className="text-base md:text-lg mb-4">
            Helping you grow your portfolio with ease remains our biggest priority. With $30M in investments, a world-class team, and five-star ratings everywhere online, DoorLoop is changing the way that properties are managed (and giving property managers more freedom than ever in the process).
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our vision</h2>
          <p className="text-base md:text-lg">
            To help property managers and landlords accomplish more by doing less. We seek to empower property managers to oversee their properties and build lasting relationships with their tenants in the easiest ways possible.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-20 text-center">
        <h4 className="text-lg font-semibold text-green-600">GALLERY</h4>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Life as a Looper</h2>
        <p className="text-base md:text-lg mb-5">From feature rollouts to ping pong tournaments, there’s never a dull moment.</p>
        <button className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">Join Our Team</button>
      </div>

      {/* Growth Section */}
      <div className="mt-20 text-center mb-20">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">Set your business up for growth</h3>
        <p className="text-base md:text-lg mb-5">Make more money, get organized, and grow your business with the highest-rated property management software.</p>
        <button className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">Request A Demo</button>
      </div>
    </div>
  );
};

export default About;

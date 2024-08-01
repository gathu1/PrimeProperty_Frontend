import React from 'react';

const Single = () => {
  return (
    <div className='pt-20 flex flex-col md:flex-row items-center md:items-start'>
      {/* Text Section */}
      <div className='w-full md:w-1/2 px-4 md:px-8 lg:px-16 mb-10 md:mb-0 mt-40'>
        <h2 className='text-2xl md:text-4xl font-bold text-center md:text-left'>
          Empower Your Affordable Housing Portfolio with Evolving Software.
        </h2>
        <p className='mt-6 text-base md:text-lg text-center md:text-left'>
          HabitaLink is more than just property management software—it's your strategic partner. Designed to streamline daily operations, we handle the details, freeing your team to focus on driving business growth and enhancing tenant experiences.
        </p>
        <div className='flex justify-center md:justify-start'>
          <button className='bg-blue-400 hover:bg-blue-300 text-white font-semibold py-2 px-4 rounded-lg mt-6'>
            Chat with an Expert
          </button>
        </div>
      </div>
      {/* Image Section */}
      <div className='w-full md:w-1/2 flex justify-center mt-5'>
        <img 
          src="src\assets\photo-1545169734-58a4a6353ccb.avif" 
          alt="Affordable Housing" 
          className='w-full max-w-xs md:max-w-sm lg:max-w-md mb-10 rounded-lg' 
          style={{ height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default Single;

import React from 'react';

const Single = () => {
  return (
    <div className='pt-20 flex flex-col md:flex-row items-center'>
      <div className='w-full md:w-1/2 px-4 md:px-16 mb-10 md:mb-0'>
        <h2 className='text-2xl md:text-4xl font-bold text-center md:text-left'>
          Empower your single-family rental portfolio with <br /> 
          software that evolves <br /> with you.
        </h2>
        <p className='mt-6 text-base md:text-lg text-center md:text-left'>
          HabitaLink isn't just property management software—it's your strategic partner. 
          Engineered to streamline daily operations, we handle the details, freeing your team to drive business growth.
        </p>
        <div className='flex justify-center md:justify-start'>
          <button className='bg-blue-400 hover:bg-blue-300 text-white font-semibold py-2 px-4 rounded-lg mt-6'>
            Chat with an Expert
          </button>
        </div>
      </div>
      <div className='w-full md:w-1/2 flex justify-center mt-5'>
        <img 
          src="src\assets\photo-1560440021-33f9b867899d.avif" 
          alt="Property Management" 
          className='w-full max-w-xs md:max-w-sm mb-10 rounded-lg' 
        />
      </div>
    </div>
  );
};

export default Single;

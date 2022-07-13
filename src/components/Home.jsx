import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#1e352f]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#c33c54]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#EEF5DB]'>Bruno Lisboa</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#c7efcf]'>i'm a Web developer</h2>
        <p className='text-[#EEF5DB] py-4 max-w-[700px]'> I am a web developer with, a person who enjoys coding, and who thanks this IT world for the opportunity it gives him to live doing what he likes!
            Characteristics such as motivation, companionship, and a strong conviction that you have to constantly update yourself, are what you will find in me! Soft skills such as Time management, communication, adaptability, problem-solving, and teamwork are very important!
            Have a good life!
            We are in contact
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#c33c54] hover:border-[#c33c54]'>View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3'/>    
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
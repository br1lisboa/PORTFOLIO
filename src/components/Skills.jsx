import React from 'react';

import ReactImg from '../assets/react.png';
import Css from '../assets/css.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Html from '../assets/html.png';
import JavaScript from '../assets/javascript.png';
import TailWind from '../assets/tailwind.png';
import Node from '../assets/node.png';

function Skills() {
  return (
    <div name='skills' className='w-full h-screen bg-[#1e352f] text-[#EEF5DB]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#c33c54]'>Skills</p>
          <p className='py-4 '>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
            <p className='my-4'>ReactJS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="JS icon" />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Css} alt="CSS icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Html} alt="Html icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={FireBase} alt="Firebase icon" />
            <p className='my-4'>FireBase</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt="NodeJS icon" />
            <p className='my-4'>NodeJS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
            <p className='my-4'>GitHub</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={TailWind} alt="Tailwind icon" />
            <p className='my-4'>TailWind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
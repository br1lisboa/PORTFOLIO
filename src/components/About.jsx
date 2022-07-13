import React from 'react';

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#1e352f] text-[#EEF5DB]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#c33c54]'>
                        About
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>Hi, I'm Bruno, nice tu meet you. Pleas take a look around.</p>
                    </div>
                    <div>
                        <p>I am passionate about building excellent software that imporves the lives
                        of those around me. I specialize in creating software for clients ranging from
                        individuals and small-businesses. I'm also a teacher, I teach REACTJS, JavaScrpit, 
                        CSS, SASS, HTML, GIT, GitHub, Bootrstrap, Tailwind, among others..What would you do
                        if you had a software expert available at your fingertips?</p>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default About;
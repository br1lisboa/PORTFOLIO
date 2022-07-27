import React from 'react';
import MotorShop from '../assets/motorshop.png'
import EShop from '../assets/eShop.png';
import Calc from '../assets/calcula.png';
import Cart from '../assets/carWhitJS.png';
import Todo from '../assets/todolist.png';

function Work() {
  return (
    <div name='work' className='w-full md:h-screen text-[#EEF5DB] bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#EEF5DB] border-[#c33c54]'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>
            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid item */}
                <div style={{backgroundImage: `url(${MotorShop})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-[#EEF5DB] tracking-wider'>
                            E-Commerce whit ReactJS - Firebase
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://motorbikeshop.netlify.app/" target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEF5DB] text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/br1lisboa/coder_ecommerce_reactjs" target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEF5DB] text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${EShop})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-[#EEF5DB] tracking-wider'>
                            E-Commerce whit JS-HTML-CSS
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://br1lisboa.github.io/lisboa_proyect_Ecommerce/" target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEF5DB] text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/br1lisboa/lisboa_proyect_Ecommerce" target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEF5DB] text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Todo})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-[#EEF5DB] tracking-wider'>
                            ToDoList whit ReactJS
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://todolistbybr1.netlify.app/" target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEF5DB] text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/br1lisboa/react_lista_de_tareas-thingsToDo-" target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEF5DB] text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Cart})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-[#EEF5DB] tracking-wider'>
                            Cart whit JavaScript
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://br1lisboa.github.io/carrito_eCommerce/" target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEF5DB] text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/br1lisboa/carrito_eCommerce" target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEF5DB] text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Calc})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-[#EEF5DB] tracking-wider'>
                            Calculator whit RactJS
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://br1lisboa.github.io/react_calculadora-calculator-/" target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEF5DB] text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/br1lisboa/react_calculadora-calculator-" target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEF5DB] text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Work;
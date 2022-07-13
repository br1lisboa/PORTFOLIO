import React, {useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {AiOutlineWhatsApp} from 'react-icons/ai';
/* import {BsTelegram} from 'react-icons/bs'; */
/* import Logo from '../assets/iconMe.png'; */
import { Link } from 'react-scroll';

function NavBar() {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-[#EEF5DB]'>
			<div>
				{/* <img src={Logo} alt="logo del portfolio de Bruno Lisboa" style={{width: '50px'}}/> */}
			</div>

			{/* menu */}
				<ul className='hidden md:flex'>
					<li> 
						<Link  to="home"  smooth={true}  duration={500}>
          					Home
        				</Link>
					</li>
					<li>
						<Link  to="about"  smooth={true}  duration={500}>
          					About
        				</Link>
					</li>
					<li>
						<Link  to="skills"  smooth={true}  duration={500}>
          					Skills
        				</Link>
					</li>
					<li>
						<Link  to="work"  smooth={true}  duration={500}>
          					Works
        				</Link>
					</li>
					<li>
						<Link  to="contact"  smooth={true}  duration={500}>
          					Contact
        				</Link>
					</li>
				</ul>

			{/* menu hamburguer */}
			<div onClick={handleClick} className='md:hidden z-10'>
				{!nav ? <FaBars /> : <FaTimes />}
			</div>
			
			{/* mobile menu */}
			<ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#1e352f] flex flex-col justify-center items-center'}>
				<li className='py-6 text-4xl'>
					<Link onClick={handleClick} to="home"  smooth={true}  duration={500}>
						Home
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link onClick={handleClick} to="about"  smooth={true}  duration={500}>
						About
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link onClick={handleClick} to="skills"  smooth={true}  duration={500}>
						Skills
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link onClick={handleClick} to="work"  smooth={true}  duration={500}>
						Works
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link onClick={handleClick} to="contact"  smooth={true}  duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* social icons */}
			<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
				<ul>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
						<a className='flex justify-between items-center w-full text-[#EEF5DB]'
						href="https://www.linkedin.com/in/bruno--lisboa/" target="_blank" rel='noreferrer'>
							Linkedin <FaLinkedin size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
						<a className='flex justify-between items-center w-full text-[#EEF5DB]'
						href="https://github.com/br1lisboa" target="_blank" rel='noreferrer'>
							GitHub <FaGithub size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6bc2b0]'>
						<a className='flex justify-between items-center w-full text-[#EEF5DB]'
						href="https://wa.me/5493624545529?text=Hello!%20I'm%20Bruno!%20What%20do%20you%20need?" target="_blank" rel='noreferrer'>
							Whatsapp <AiOutlineWhatsApp size={30} />
						</a>
					</li>
{/* 					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
						<a className='flex justify-between items-center w-full text-gray-300'
						href="https://t.me/[ID de usuario]">
							Resume <BsTelegram size={30} />
						</a>
					</li> */}
				</ul>
			</div>
		</div>
  );
}

export default NavBar;
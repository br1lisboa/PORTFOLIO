import React from 'react';

function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-[#1e352f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/aa2bf1cb-6943-4ad6-ac75-aecff2abf3bc" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#c33c54] text-[#EEF5DB]'>Contact</p>
                <p className='text-[#EEF5DB] py-4'>Submit the form belor or shot me an email - brlisbo@gmai.com</p>
            </div>
            <input className='bg-[#C7EFCF] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#C7EFCF]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#C7EFCF] p-2' placeholder='Message' name="message" rows="10"></textarea>
            <button className='text-[#EEF5DB] border-2 hover:bg-[#c33c54] hover:border-[#c33c54] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    
    </div>
  );
}

export default Contact;
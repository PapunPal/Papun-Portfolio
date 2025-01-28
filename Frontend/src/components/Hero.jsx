import React from 'react'
import Selfie from '../assets/papun-selfie.jpeg'


const Hero = () => {

  const handleResumeDownload = () => {
    const userConfirmed = window.confirm('Do you want to download the resume?');
    if (userConfirmed) {
      const link = document.createElement('a');
      link.href = 'https://drive.google.com/file/d/1R79dVpcpbsX8sE7-YTt5GADQXNJQA77F/view?usp=drive_link'; // Replace with the actual path to your resume
      link.download = 'resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  return (
    <div className='bg-gradient-to-b from-gray-900 to-black text-white text-center pb-16'>
      <img src={Selfie} alt=""
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
      <h1 className='text-4xl font-bold'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Pappun Pal</span>
        , Computer Scaience Engineering Student
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        I specialize in building modern and responsive web applications.
      </p>
     
        <div className='mt-8 space-x-4'>
          <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
            onClick={() => window.location.href = '#contact'}
          >Contact With Me</button>
          <button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
            onClick={handleResumeDownload}>
            Resume
          </button>
        </div>
      


    </div>
  )
}

export default Hero

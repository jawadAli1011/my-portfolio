import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import bgImg from '../assets/bgImg.png'
import manimg from "../assets/manImage.png"

const Home = () => {
    return (
        <div className='  w-full   mx-auto grid lg:grid-cols-2 gap-10 items-center mt-5 lg:px-5 lg:mt-20'>
            { /* left content */}
            <div className='text-center lg:text-left'>
                <h1 className='text-4xl  font-bold text-white mt-10'>Hi! I'm <span>Jawad Ali,</span>
                    <br />
                    <span className='text-green-400'>
                        <Typewriter
                            words={['Web Developer', 'Web Designer']}
                            loop
                            cursor
                            cursorStyle='|'
                            typeSpeed={90}
                            deleteSpeed={50}
                            delaySpeed={100}

                        />
                    </span>
                </h1>
                <p className='text-gray-300 mt-4 leading-relaxed' >
                    I build visually captivating, user-friendly websites and web apps that trasform your ideas into seamless, engaging digital experiences.
                </p>
                <div className='mt-8 flex gap-8  lg:justify-start justify-center'>
                    <button className='bg-green-600 hover:bg-green-800 trasition px-6 py-3 rounded-lg text-white font-medium' >Contact Me</button>
                    <a href='/jawad-ali-cv.pdf' download="JawadAli-CV" className='bg-green-600 hover:bg-green-800 trasition px-6 py-3 rounded-lg text-white font-medium' >Download CV </a>
                   
                </div>
            </div>
            {/* right content */}
            <div className='relative flex justify-center mb-25' >
                {/* bg image */}
                <img src={bgImg} alt="bg image" className='absolute w-105 h-105 rounded-full object-cover mt-10 opacity-90' />
                {/* man profile image */}
                <img src={manimg} alt="man image" className='relative w-80 -mt-15 z-10' />
            </div>
        </div>
    )
}

export default Home;
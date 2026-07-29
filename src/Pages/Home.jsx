import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import bgImg from '../assets/bgImg.png'
import manimg from '../assets/manImage.png'

const Home = () => {
  return (
    <div className="mx-auto mt-5 grid w-full items-center gap-10 lg:mt-20 lg:grid-cols-2 lg:px-5">
      {/* left content */}
      <div className="text-center lg:text-left">
        <h1 className="mt-10 text-4xl font-bold text-white">
          Hi! I'm <span>Jawad Ali,</span>
          <br />
          <span className="text-green-400">
            <Typewriter
              words={['Web Developer', 'Web Designer']}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={100}
            />
          </span>
        </h1>
        <p className="mt-4 leading-relaxed text-gray-300">
          I take your idea and turn it into a website that looks good and feels
          good to use.
        </p>
        <div className="mt-8 flex justify-center gap-8 lg:justify-start">
          <button className="trasition rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-800">
            Contact Me
          </button>
          <a
            href="/jawad-ali-cv.pdf"
            download="JawadAli-CV"
            className="trasition rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-800"
          >
            Download CV{' '}
          </a>
        </div>
      </div>
      {/* right content */}
      <div className="relative flex justify-center">
        {/* bg image */}
        <img
          src={bgImg}
          alt="bg image"
          className="absolute h-105 w-105 rounded-full object-cover opacity-90"
        />
        {/* man profile image */}
        <img src={manimg} alt="man image" className="relative -top-20 w-80" />
      </div>
    </div>
  )
}

export default Home

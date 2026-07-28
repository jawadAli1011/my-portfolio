import React from 'react'
import akiHomePage from "../assets/akiHomePage.png"

export const Projects = () => {
    return (
        <div className='text-center text-white'>

            <h2 className='text-4xl font-bold mb-4 mt-6'>My <span className='text-green-400'>Projects</span></h2>
            <div className='relative group w-full ' >

                <img src={akiHomePage} alt="" className='w-full object-cover ' />

                <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                    <a className='px-6 py-3 bg-green-400 text-white font-bold ' href="https://alkausar-international-pvt-ltd.vercel.app/
                    "
                        rel="noopener noreferrer"
                        target='_blank'
                    >Go Live</a>
                </div>

            </div>
        </div>
    )
}






export default Projects;
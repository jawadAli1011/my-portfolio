import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaDownload } from "react-icons/fa";
import manimg from "../assets/manImage.png"

const Sidebar = () => {
    return (
        <div className='w-[50%] z-11  sm:w-[22%] fixed top-0 left-0  hidden h-screen bg-[#002512] md:flex flex-col justify-between  '>
       
            <div className='p-8'>
                <div className='   flex items-center justify-center '><img src={manimg} className='w-20' alt="" /></div>
                <div className='flex flex-col gap-4 pt-10 place-items-center uppercase text-white'>
                    <NavLink to='/' className='flex items-center gap-3 px-6 py-3' >
                        <p className='text-lg'>Home</p>
                    </NavLink>
                    <NavLink to='/services' className='flex items-center gap-3 px-6 py-3'>
                        <p className='text-lg'>Services</p>
                    </NavLink>
                    <NavLink to='/projects' className='flex items-center gap-3 px-6 py-3'>
                        <p className='text-lg'>Projects</p>
                    </NavLink>
                    <NavLink to='/contact' className='flex items-center gap-3 px-6 py-3'>
                        <p className='text-lg'>Contact</p>
                    </NavLink>
                </div>
            </div>
            <button className='bg-green-500   px-1 py-4 flex justify-center gap-4 font-semibold md:m-4 m-0 my-8 text-white'>Download CV <FaDownload /></button>
        </div>
    )
}

export default Sidebar
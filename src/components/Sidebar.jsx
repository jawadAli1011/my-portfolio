import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaDownload } from 'react-icons/fa'
import manimg from '../assets/manImage.png'
import { LuSquareMenu } from 'react-icons/lu'
import { FaRegWindowClose } from 'react-icons/fa'

// <FaRegWindowClose  className='text-white z-100 right-0'/>  cross

const Sidebar = () => {
  const [toggle, setToggle] = useState(false)
  console.log(toggle)
  return (
    <div>
      <button
        onClick={() => setToggle(!toggle)}
        className="fixed top-4 left-4 z-100 flex cursor-pointer text-2xl text-white md:hidden"
      >
        {toggle ? <FaRegWindowClose /> : <LuSquareMenu />}
      </button>

      <div>
        {
          <div
            className={`fixed top-0 left-0 z-11 ${toggle ? 'traslate-x-0' : '-translate-x-full'} h-screen w-[50%] flex-col justify-between bg-[#002512] md:w-[22%] md:translate-x-0`}
          >
            <div className="p-8">
              <div className="flex items-center justify-center">
                <img src={manimg} className="w-20" alt="" />
              </div>
              <div className="flex flex-col place-items-center gap-4 pt-10 text-white uppercase">
                <NavLink
                  onClick={() => setToggle(!toggle)}
                  to="/"
                  className="flex items-center gap-3 px-6 py-3"
                >
                  <p className="text-lg">Home</p>
                </NavLink>
                <NavLink
                  onClick={() => setToggle(!toggle)}
                  to="/services"
                  className="flex items-center gap-3 px-6 py-3"
                >
                  <p className="text-lg">Services</p>
                </NavLink>
                <NavLink
                  onClick={() => setToggle(!toggle)}
                  to="/projects"
                  className="flex items-center gap-3 px-6 py-3"
                >
                  <p className="text-lg">Projects</p>
                </NavLink>
                <NavLink
                  onClick={() => setToggle(!toggle)}
                  to="/contact"
                  className="flex items-center gap-3 px-6 py-3"
                >
                  <p className="text-lg">Contact</p>
                </NavLink>
              </div>
            </div>
            <a className="m-0 my-8 flex justify-center gap-4 bg-green-500 px-1 py-4 font-semibold text-white md:m-4">
              Download CV <FaDownload />
            </a>
          </div>
        }
      </div>
    </div>
  )
}

export default Sidebar

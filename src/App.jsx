import React from 'react'
import './index.css'
import Sidebar from './components/Sidebar'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div className='bg-[#060f0b] min-h-screen' >
      <div className='flex w-full'>
        <Sidebar />
        {/* ml-[max(5vw,25px)] */}
        <div className='mx-10 text-black text-base ml-[23%]' >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
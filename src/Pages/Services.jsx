import React from 'react'

import {
    FaLaptopCode,
    FaPaintBrush,
    FaMobileAlt,
    FaSearch,
    FaServer,
    FaShoppingCart
} from "react-icons/fa";

const services = [
    {
        icon: <FaLaptopCode className='text-3xl mx-auto mb-3' />,
        title: "Web Development",
        description: "I build fast, responsive, and scable websites using modern technologies like React.js, Node.js, and TailwindCSS."
    },
    {
        icon: <FaPaintBrush className='text-3xl mx-auto mb-3' />,
        title: "UI/UX Design",
        description: "I design clean, intuitive, and conversion-focused interfaces that make users enjoy your product."
    },
    {
        icon: <FaMobileAlt className='text-3xl mx-auto mb-3' />,
        title: "Mobile Friendly Design",
        description: "Every website I build is fully responsive and looks amazing on phones, tablets, and desktops. "
    },
    {
        icon: <FaSearch className='text-3xl mx-auto mb-3' />,
        title: "SEO Optimization",
        description: "I optimize websites to rank higher on Google, improving visibility and attracting organic traffic."
    },
    {
        icon: <FaServer className='text-3xl mx-auto mb-3' />,
        title: "Backend Integration",
        description: "I develop secure, scalable backends and APIs to power your application with real-time data."
    },
    {
        icon: <FaShoppingCart className='text-3xl mx-auto mb-3' />,
        title: "E-Commerce Development",
        description: "From product pages to chechout flow, I build full e-commerce solutions that convert visitors into customers"
    },
]

const Services = () => {
    return (
        <div className='text-center py-4 px-2 text-white' >
            <h2 className='text-4xl font-bold mb-4 mt-6'>My <span className='text-green-400'>Services</span></h2>
            {/* card container */}
            <div className='grid grid-cols-3 gap-4 max-w-4xl mx-auto  '>
                {
                    services.map((service, index) => (<div key={index} className='bg-[#001f0e] p-6 rounded-xl text-center w-full transition-transform duration-300 hover:-translate-y-1'>
                        <h3 className='text-green-500'>{service.icon}</h3>
                        <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                        <p className='text-gray-400 text-sm'>{service.description}</p>
                    </div>))
                }
            </div>

        </div>
    )
}

export default Services
import React from 'react'

import {
  FaLaptopCode,
  FaPaintBrush,
  FaMobileAlt,
  FaSearch,
  FaServer,
  FaShoppingCart,
} from 'react-icons/fa'

const services = [
  {
    icon: <FaLaptopCode className="mx-auto mb-3 text-3xl" />,
    title: 'Web Development',
    description:
      'I build fast, responsive, and scable websites using modern technologies like React.js, Node.js, and TailwindCSS.',
  },
  {
    icon: <FaPaintBrush className="mx-auto mb-3 text-3xl" />,
    title: 'UI/UX Design',
    description:
      'I design clean, intuitive, and conversion-focused interfaces that make users enjoy your product.',
  },
  {
    icon: <FaMobileAlt className="mx-auto mb-3 text-3xl" />,
    title: 'Mobile Friendly Design',
    description:
      'Every website I build is fully responsive and looks amazing on phones, tablets, and desktops. ',
  },
  {
    icon: <FaSearch className="mx-auto mb-3 text-3xl" />,
    title: 'SEO Optimization',
    description:
      'I optimize websites to rank higher on Google, improving visibility and attracting organic traffic.',
  },
  {
    icon: <FaServer className="mx-auto mb-3 text-3xl" />,
    title: 'Backend Integration',
    description:
      'I develop secure, scalable backends and APIs to power your application with real-time data.',
  },
  {
    icon: <FaShoppingCart className="mx-auto mb-3 text-3xl" />,
    title: 'E-Commerce Development',
    description:
      'From product pages to chechout flow, I build full e-commerce solutions that convert visitors into customers',
  },
]

const Services = () => {
  return (
    <div className="px-2 py-4 text-center text-white">
      <h2 className="mt-6 mb-4 text-4xl font-bold">
        My <span className="text-green-400">Services</span>
      </h2>
      {/* card container */}
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full rounded-xl bg-[#001f0e] p-6 text-center transition-transform duration-300 hover:-translate-y-1"
          >
            <h3 className="text-green-500">{service.icon}</h3>
            <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
            <p className="text-sm text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services

import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
    return (
        <section
            id="contact"
            className=" text-white py-20 px-6"
        >
            <div className="max-w-full mx-auto">

                {/* Heading */}

                <div className="text-center mb-14">
                    <p className="text-green-500 uppercase tracking-widest">
                        Get In Touch
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        Contact Me
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        I'm currently available for freelance work, internships,
                        and full-time React Developer opportunities.
                        Feel free to reach out.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Left Side */}

                    <div className="space-y-8">

                        <div>
                            <h3 className="text-2xl font-semibold mb-4">
                                Let's Talk
                            </h3>

                            <p className="text-gray-400 leading-8">
                                Whether you have a project in mind, need a React
                                developer, or just want to say hello, I'd love to hear
                                from you.
                            </p>
                        </div>

                        {/* Contact Cards */}

                        <div className="space-y-5">

                            <div className="flex items-center gap-4 bg-gray-900 p-5 rounded-xl hover:bg-gray-800 transition">

                                <div className="bg-green-500 p-4 rounded-full">
                                    <FaEnvelope />
                                </div>

                                <div>
                                    <p className="text-gray-400 text-sm">Email</p>

                                    <a
                                        href="mailto:jawad705294@gmail.com"
                                        className="hover:text-green-500"
                                    >
                                        jawad705294@gmail.com
                                    </a>
                                </div>

                            </div>

                            <div className="flex items-center gap-4 bg-gray-900 p-5 rounded-xl hover:bg-gray-800 transition">

                                <div className="bg-green-500 p-4 rounded-full">
                                    <FaPhoneAlt />
                                </div>

                                <div>
                                    <p className="text-gray-400 text-sm">Phone</p>

                                    <a
                                        href="tel:+923189552205"
                                        className="hover:text-green-500"
                                    >
                                        03189552205
                                    </a>
                                </div>

                            </div>

                            <div className="flex items-center gap-4 bg-gray-900 p-5 rounded-xl hover:bg-gray-800 transition">

                                <div className="bg-green-500 p-4 rounded-full">
                                    <FaMapMarkerAlt />
                                </div>

                                <div>
                                    <p className="text-gray-400 text-sm">Location</p>

                                    <p>Peshawar, Pakistan</p>
                                </div>

                            </div>

                        </div>

                        {/* Social */}

                        <div>

                            <h4 className="text-lg font-semibold mb-4">
                                Follow Me
                            </h4>

                            <div className="flex gap-5">

                                <a
                                    href="https://github.com/jawadAli1011"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-gray-900 p-4 rounded-full hover:bg-green-500 transition duration-300"
                                >
                                    <FaGithub size={22} />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/jawad-ali-7813882a3"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-gray-900 p-4 rounded-full hover:bg-green-500 transition duration-300"
                                >
                                    <FaLinkedin size={22} />
                                </a>

                            </div>

                        </div>

                    </div>

                    {/* Contact Form */}

                    <div className="bg-gray-900 rounded-2xl p-8 shadow-xl">

                        <form className="space-y-6">

                            <div>
                                <label className="block mb-2">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-gray-800 border border-green-500 rounded-lg px-4 py-3 outline-none focus:border-green-600"
                                />
                            </div>

                            <div>
                                <label className="block mb-2">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-gray-800 border border-green-500 rounded-lg px-4 py-3 outline-none focus:border-green-600"
                                />
                            </div>

                            <div>
                                <label className="block mb-2">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    placeholder="Project Discussion"
                                    className="w-full bg-gray-800 border border-green-500 rounded-lg px-4 py-3 outline-none focus:border-green-600"
                                />
                            </div>

                            <div>
                                <label className="block mb-2">
                                    Message
                                </label>

                                <textarea
                                    rows="6"
                                    placeholder="Write your message..."
                                    className="w-full bg-gray-800 border border-green-500 rounded-lg px-4 py-3 outline-none resize-none focus:border-green-600"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-500 hover:bg-green-600 py-4 rounded-lg font-semibold transition duration-300"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}
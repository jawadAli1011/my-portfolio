import React from 'react'

const Contact = () => {
    return (
        <div className='text-white max-w-xl mx-auto  p-6 border border-[#212531] rounded-xl '>
            <h2 className='text-center text-2xl font-semibold'>Have a Project ?</h2>
            <p className='text-center text-gray-500 mb-5'>Send a message so we can get to work</p>
            <form action="">
                <div className='mb-4'>
                    <label htmlFor="" className='block mb-1 font-semibold'>Full Name</label>
                    <div className='flex gap-3'>
                        <input type="text" placeholder='First Name' className='w-1/2 p-2 border border-#212531 rounded-md bg-tansparent' />
                        <input type="text" placeholder='Last Name' className='w-1/2 p-2 border border-#212531 rounded-md bg-tansparent' />
                    </div>
                </div>
                <div className='mb-4'>
                    <label htmlFor="" className='block mb-1 font-semibold'>Email</label>
                    <input type="Email" placeholder='example@example.com' className='w-full p-2 border border-#212531 rounded-md bg-tansparent' />
                </div>
                <div>
                    <label htmlFor="" className='block mb-1 font-semibold'>Message</label>
                    <textarea name="" id="" className='w-full p-2 border border-#212531 rounded-md bg-tansparent h-40 resize-none'></textarea>
                </div>
                <button className='w-full p-3 bg-green-500 text-white rounded-md'>Submit</button>
            </form>
        </div>
    )
}

export default Contact
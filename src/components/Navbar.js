import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [hide, setHide] = useState(false)
    const Thats = () => {
        setHide((pre) => !pre)
        setTimeout(() => {
            setHide(false)
        }, 2000);
    }
    return (
        <div className='stcky w-full'>
            <div className='bg-orange-100 w-full flex flex-row justify-between px-2 sm:px-8 py-1 font-semibold text-slate-600 text-sm sm:text-[15px] sm:h-12 sm:items-center'>
                <div className='flex flex-row space-x-4 sm:space-x-8  '>
                    <Link to="/" className=' hover:text-blue-600 hover:underline'>Home</Link>
                    <Link to="/about" className=' hover:text-blue-600 hover:underline'>About Us</Link>
                    <Link to="/services" className=' hover:text-blue-600 hover:underline'>Services</Link>
                </div>
                <div className=' flex-row  sm:space-x-8 hidden sm:flex'>
                    <Link to='/login' className=' hover:text-blue-600 hover:underline'>Log in</Link>
                    <Link to='/login' className=' hover:text-blue-600 hover:underline'>Sign Up</Link>
                </div>
                <div className='sm:hidden'>
                    <button onClick={Thats} className=' hover:text-blue-600'>&equiv;</button>
                    {hide && <div className='flex flex-col absolute right-2 space-y-1 text-white '>
                        <Link to='/login' className='bg-blue-600 px-2 rounded-lg hover:bg-white hover:text-blue-600 hover:underline'>Log in</Link>
                        <Link to='/login' className='bg-blue-600 px-2 rounded-lg hover:bg-white hover:text-blue-600 hover:underline'>Sign Up</Link>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='stcky w-full'>
            <div className='bg-orange-100 w-full flex flex-row justify-between px-2 sm:px-8 py-1 font-semibold text-slate-600 text-sm sm:text-[15px] sm:h-12 sm:items-center'>
                <div className='flex flex-row space-x-4 sm:space-x-8  '>
                    <Link to="/" className=' hover:text-blue-600 hover:underline'>Home</Link>
                    <Link to="/about" className=' hover:text-blue-600 hover:underline'>About Us</Link>
                    <Link to="/services" className=' hover:text-blue-600 hover:underline'>Services</Link>
                    <Link to="/admin" className=' hover:text-blue-600 hover:underline'>Admin only</Link>
                </div>
                <div className=' flex-row  sm:space-x-8  sm:flex'>
                    
                    <Link to='/signup' className=' hover:text-blue-600 hover:underline'>Sign Up</Link>
                </div>
               
            </div>
        </div>
    )
}

export default Navbar

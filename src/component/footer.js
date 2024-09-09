import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-2'>  
      <div className='flex items-center justify-center gap-4'>  
        <Link to={"/"} className='hover:text-white transition-colors duration-300' aria-label="About page">About</Link>  
        <Link to={"/contact"} className='hover:text-white transition-colors duration-300' aria-label="Contact page">Contact</Link>  
      </div>  
      <p className='text-sm'>Created By Dynamic Coding with Amit</p>  
    </div>  
  )
}

export default Footer

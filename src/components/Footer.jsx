import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img className='mb-5 w-40' src={assets.logo}></img>
                <p className='w-full mg:w-2/3 text-gray-600 leading-6'>Helping you book smarter, faster, and safer doctor appointments.Trusted care, just a click away.</p>

            </div>
            
            
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>

            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>000000234</li>
                    <li>xyz@gmail.com</li>
                </ul>

            </div>
        </div>
        <div>
            <hr></hr>
            <p className='py-5 text-sm text-center'>Copyright 2025@ I_Trust_Dr. - All Right Reserved</p>
        </div>

      
    </div>
  )
}

export default Footer

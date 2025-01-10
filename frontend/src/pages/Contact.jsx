import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className=' min-h-screen flex flex-col items-center'>

      <div className='text-center py-8 text-3xl'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div>
      <h3 className='text-gray-500 text-2xl'>We would love to hear from you. Get in touch with us!</h3>
      </div>

      <div className='my-16 flex flex-col items-center gap-12 md:flex-row md:gap-20 max-w-7xl mx-auto px-6'>
        <img 
          className='w-80 md:w-[450px] lg:w-[550px] rounded-lg shadow-2xl' 
          src={assets.contact_img} 
          alt='Customer Service' 
        />
        <div className='flex flex-col items-start gap-6 text-center md:text-left'>
          <p className='font-semibold text-2xl text-gray-800'>Our Office</p>
          <p className='text-gray-700 text-lg'>
            CSE Department, Parul University <br />
            Vadodara, Gujarat, India
          </p>
          <p className='text-gray-700 text-lg'>
            Phone: +91 8619959340 (12:00pm to 8:00pm) <br />
            Email: info@wearitfashion.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact

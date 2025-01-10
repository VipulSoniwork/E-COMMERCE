import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className=''>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='px-10 my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.logo1} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Welcome to WearIt, where fashion meets innovation. We are a dynamic clothing brand dedicated to transforming the way people experience style. Our platform is designed for fashion enthusiasts who seek unique, trendsetting designs and a seamless shopping journey.</p>
          <p>Founded by a passionate team from Parul University, WearIt aims to blend creativity with modern technology to deliver an intuitive and personalized fashion experience. Our mission is to empower individuals to express their style effortlessly and stay ahead of the trends.</p>
          {/* <b className='text-gray-800'>Our Mission</b> */}
          <p>Join us as we redefine the future of fashion, one look at a time.</p>
        </div>
      </div>

      <div className=' px-10 text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className=' px-10  flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className=' text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className=' text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About

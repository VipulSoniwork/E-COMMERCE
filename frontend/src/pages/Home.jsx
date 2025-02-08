import React, { useContext } from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Testimonial from '../components/Testimonial'
import ProductCard from '../components/ProductCard'
import { ShopContext } from '../context/ShopContext'

const Home = () => {
  const { products } = useContext(ShopContext)
  const bestSellers = products.filter(item => item.bestseller)

  return (
    <div>
      <Hero />
      <LatestCollection/>
      <div className='px-4 py-8'>
        <h2 className='text-2xl font-bold mb-6'>Best Sellers</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {bestSellers.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      {/* <OurPolicy/> */}
      {/* <NewsletterBox/> */}
      <Testimonial/>
    </div>
  )
}

export default Home

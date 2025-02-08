import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductCard from '../components/ProductCard'

const WishlistPage = () => {
    const { wishlist, products } = useContext(ShopContext)
    
    const wishlistProducts = products.filter(product => wishlist.includes(product._id))

    return (
        <div className='px-4 py-8'>
            <Title text1="YOUR" text2="WISHLIST" />
            
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
                {wishlistProducts.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
            
            {wishlistProducts.length === 0 && (
                <div className='text-center text-gray-500 mt-8'>
                    <p className='text-xl mb-2'>Your wishlist is empty</p>
                    <p className='text-sm'>Add items to your wishlist to keep track of products you love!</p>
                </div>
            )}
        </div>
    )
}

export default WishlistPage 
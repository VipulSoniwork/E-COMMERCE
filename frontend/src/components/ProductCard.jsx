import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    const { currency, wishlist, addToWishlist, removeFromWishlist, token, navigate, addToCart } = useContext(ShopContext)
    const isInWishlist = wishlist.includes(product._id)

    const handleWishlist = (e) => {
        e.preventDefault() // Prevent navigation when clicking wishlist
        if (!token) {
            navigate('/login')
            return
        }
        isInWishlist ? removeFromWishlist(product._id) : addToWishlist(product._id)
    }

    // const handleAddToCart = (e) => {
    //     e.preventDefault()
    //     if (!token) {
    //         navigate('/login')
    //         return
    //     }
    //     addToCart(product._id, product.sizes[0])
    // }

    return (
        <Link to={`/product/${product._id}`} className='relative group'>
            <div className='border p-2 rounded-lg hover:shadow-lg transition-shadow'>
                <div className='relative overflow-hidden'>
                    <img 
                        src={product.image[0]} 
                        className='w-full aspect-square object-cover rounded transition-transform duration-300 group-hover:scale-105' 
                        alt={product.name} 
                    />
                    {/* Action Buttons */}
                    <div className='absolute top-2 right-2 flex flex-col gap-2'>
                        <button 
                            onClick={handleWishlist}
                            className='w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-pink-50 transition-colors'
                        >
                            <FontAwesomeIcon 
                                icon={isInWishlist ? solidHeart : regularHeart} 
                                className={`w-4 h-4 ${isInWishlist ? 'text-pink-500' : 'text-gray-600'}`}
                            />
                        </button>
                        {/* <button 
                            onClick={handleAddToCart}
                            className='w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors'
                        >
                            <FontAwesomeIcon 
                                icon={faShoppingCart} 
                                className="w-4 h-4 text-gray-600"
                            />
                        </button> */}
                    </div>
                </div>
                <div className='p-2'>
                    <h3 className='font-medium truncate'>{product.name}</h3>
                    <div className='flex justify-between items-center mt-1'>
                        <p className='text-gray-600'>{currency}{product.price}</p>
                        {product.bestseller && (
                            <span className='text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded'>
                                Bestseller
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard 
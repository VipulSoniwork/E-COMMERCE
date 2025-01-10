import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeWidth, setActiveWidth] = useState(0);
    const [activeLeft, setActiveLeft] = useState(0);

    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
    };

    const navLinks = [
        { to: '/', label: 'HOME' },
        { to: '/collection', label: 'COLLECTION' },
        { to: '/about', label: 'ABOUT' },
        { to: '/contact', label: 'CONTACT' },
    ];

    return (
        <div className=' z-50 flex items-center justify-between py-3 px-10 bg-white font-medium'>
            {/* Logo */}
            <Link to='/'><img src={assets.logo1} className='w-20 h-auto ' alt="" /></Link>

            <div className='relative'>
                <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                    {navLinks.map((link, index) => (
                        <li key={link.to} className='relative'>
                            <NavLink 
                                to={link.to}
                                className='flex flex-col items-center gap-1'
                                onMouseEnter={(e) => {
                                    setActiveIndex(index);
                                    setActiveWidth(e.currentTarget.offsetWidth); // Set width based on link text
                                    setActiveLeft(e.currentTarget.offsetLeft); // Set left position based on link text
                                }}
                                onMouseLeave={() => {
                                    setActiveIndex(null);
                                }}
                            >
                                <p>{link.label}</p>
                            </NavLink>

                            {/* Animated line for each link */}
                            {activeIndex === index && (
                                <motion.div
                                    className='absolute h-[2px] bg-black'
                                    initial={{ width: 0 }} // Initial width is 0
                                    animate={{ 
                                        width: activeWidth, // Expand to link width
                                        left: activeLeft, // Align to the left of the link
                                    }}
                                    transition={{ type: 'tween', duration: 0.5, ease: [0.5, 0, 0.5, 1] }} // Cubic ease-in-out
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div className='flex items-center gap-6'>
                <img onClick={() => { setShowSearch(true); navigate('/collection'); }} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
                
                <div className='group relative'>
                    <img onClick={() => token ? null : navigate('/login')} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                    {/* Dropdown Menu */}
                    {token && 
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            {/* <p className='cursor-pointer hover:text-black'>My Profile</p> */}
                            <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                            <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>}
                </div> 
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link> 
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" /> 
            </div>

            {/* Sidebar menu for small screens */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

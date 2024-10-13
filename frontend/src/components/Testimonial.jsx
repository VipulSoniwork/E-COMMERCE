import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import Title from "./Title";

const testimonialList = [
	{
		author: {
			fullName: "Akshay Kumar",
			picture:
				"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
			designation: "Founder / CEO",
		},
		description:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
	},
	{
		author: {
			fullName: "Raima Sen",
			picture:
				"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
			designation: "Founder / CEO",
		},
		description:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
	},
	{
		author: {
			fullName: "Arjun Kapur",
			picture:
				"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
			designation: "Founder / CEO",
		},
		description:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
	},
];



const TestimonialItem = ({ testimonial }) => (
	<div>
		<p className="opacity-90 mb-3 text-">{testimonial.description}</p>
		<hr className="w-12 h-0.5 bg-black opacity-60 mb-3 mx-auto" />
		<h4 className="opacity-60 text-xl font-medium mb-8">
			{testimonial.author.fullName}
		</h4>
	</div>
);

TestimonialItem.propTypes = {
	testimonial: PropTypes.object.isRequired,
};

const Testimonial = () => {
	const [index, setIndex] = useState(0);

	// Automatically change testimonial every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) =>
				prevIndex >= testimonialList.length - 1 ? 0 : prevIndex + 1
			);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const handleDotClick = (idx) => {
		setIndex(idx);
	};

	return (
		<section className="ezy__testimonial6 light pb-8 bg-white0 text-black relative">
			<div className="container px-4 mx-auto">
				
					<div className='text-center py-8 text-3xl'>
						<Title text1={'CUSTOMER'} text2={'REVIEWS'} />
					</div>
				

				<div className="flex justify-center text-center overflow-hidden">
					<div className="md:max-w-xl relative"> {/* Make this container relative */}
						<AnimatePresence mode='wait'>
							<motion.div
								key={index}
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -50 }}
								transition={{ duration: 0.3, delay: index * 0.1 }} // Stagger based on index
								className="w-full"
							>
								<TestimonialItem testimonial={testimonialList[index]} />
							</motion.div>
						</AnimatePresence>
					</div>
				</div>

				{/* Dots Navigation */}
				<div className="absolute left-1/2 transform -translate-x-1/2 flex gap-8 z-20 mt-4">
					{testimonialList.map((_, idx) => (
						<div
							key={idx}
							className="relative group"
							onClick={() => handleDotClick(idx)}
						>
							{/* Permanent Dot */}
							<div
								className={`w-2 h-2 rounded-full cursor-pointer ${index === idx
									? "bg-black opacity-100"
									: "bg-gray-400 opacity-70"
									} transition-opacity duration-300`}
							/>
							{/* Animated Outline for Active Dot with Progress */}
							{index === idx && (
								<svg
									className="absolute top-[-6px] left-[-6px] w-5 h-5"
									viewBox="0 0 36 36"
								>
									<motion.circle
										cx="18"
										cy="18"
										r="16"
										stroke="black"
										strokeWidth="3"
										fill="transparent"
										strokeDasharray="100"
										strokeDashoffset="0"
										initial={{ strokeDashoffset: 100 }}
										animate={{ strokeDashoffset: 0 }}
										transition={{
											duration: 5,
											ease: "linear",
											repeat: Infinity,
										}}
									/>
								</svg>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
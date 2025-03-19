import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const About = () => {
	return (
		<div
			id='about'
			className='w-full px-[12%] scroll-mt-20 dark:bg-darkSecondary py-20 bg-lightSecondary'
		>
			<motion.h2
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
				className='text-center text-5xl font-Ovo mb-5'
			>
				About me
			</motion.h2>

			<motion.div className='flex w-full flex-col lg:flex-row items-center gap-20 '>
				<div className='w-64 sm:w-80 rounded-3xl max-w-none'>
					<Image
						src={assets.user_image}
						alt='user'
						className='w-full rounded-3xl'
						objectFit='cover'
						layout='responsive'
					/>
				</div>
				<motion.div
					className='flex-1'
					initial={{ y: -20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					<p className='mb-10 max-w-2xl font-Ovo'>
						I am a Frontend Developer with 4 years of experience building high-performance web applications using React.js and mobile applications with React Native. Passionate about crafting intuitive and engaging UI/UX, I have a good
						understanding of state management, API integration.
						<br />
						Beyond coding, I thrive in fast-paced environments, quickly adapting to new technologies and challenges. My problem-solving mindset enables me to turn complex requirements into seamless digital experiences. I am eager to
						contribute my skills to innovative teams that value clean, scalable, and user-centric development.
					</p>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default About;

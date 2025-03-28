import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Header = () => {
	return (
		<div className='w-11/12 mx-auto max-w-3xl text-center h-screen flex flex-col items-center justify-center gap-4'>
			<motion.div
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
				whileHover={{ scale: 2 }}
			>
				<Image
					src={assets.profile_img}
					alt=''
					className='rounded-full w-32'
					layout='fixed'
					objectFit='cover'
				/>
			</motion.div>
			<motion.h3
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.3 }}
				className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
			>
				Hi! I&apos;m Rony Wijaya{' '}
				<Image
					src={assets.hand_icon}
					className='w-6'
					alt=''
				/>
			</motion.h3>
			<motion.h1
				initial={{ y: -30, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.5 }}
				className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'
			>
				frontend developer based in Purwokerto{' '}
			</motion.h1>
			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.7, delay: 0.6 }}
				className='max-w-2xl mx-auto font-Ovo'
			>
				Available for freelance work & permanent roles! 🚀
			</motion.p>

			<div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
				<motion.a
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.5 }}
					href='https://www.linkedin.com/in/rony-arya-wijaya-627b22193/'
					className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
					target='_blank'
				>
					connect with me{' '}
					<Image
						src={assets.right_arrow_white}
						alt=''
						className='w-4'
					/>
				</motion.a>
				<motion.a
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.7, delay: 0.6 }}
					href='/FRONTEND_DEV_RONY.pdf'
					download
					className='px-10 py-3 rounded-full border  border-gray-500 flex items-center gap-2 dark:text-black dark:bg-white'
				>
					my resume
					<Image
						src={assets.download_icon}
						alt=''
						className='w-4'
					/>
				</motion.a>
			</div>
		</div>
	);
};

export default Header;

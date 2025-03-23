import { experienceList } from '@/assets/assets';
import React from 'react';
import { motion } from 'motion/react';

const Experience = () => {
	return (
		<div
			id='experience'
			className='w-full px-[12%] py-10 scroll-mt-20'
		>
			<motion.h2
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
				className='text-center text-5xl font-Ovo'
			>
				Experience
			</motion.h2>
			<motion.h3
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
				className='text-center font-Ovo text-gray-500'
			>
				Here is a quick summary of my most recent experiences
			</motion.h3>
			{experienceList.map(({ title, company, date, jobDesc }, index) => (
				<motion.div
					className='grid grid-cols-1 md:grid-cols-3 my-10 gap-4 dark:text-white dark:bg-darkCard bg-white shadow-md px-5 rounded-lg py-5 w-full'
					key={index}
					initial={{ y: -20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					<div>
						<p className='font-semibold'>{company}</p>
						<p>{date}</p>
					</div>
					<div className='col-span-2'>
						<p className='font-semibold'>{title}</p>
						<ul>
							{jobDesc.map((desc, index) => (
								<li
									className='list-disc'
									key={index}
								>
									{desc}
								</li>
							))}
						</ul>
					</div>
				</motion.div>
			))}
		</div>
	);
};

export default Experience;

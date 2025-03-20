import { workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Work = () => {
	return (
		<div
			id='project'
			className='w-full px-[12%] py-10 scroll-mt-20 dark:bg-darkSecondary bg-lightSecondary'
		>
			<h2 className='text-center text-5xl font-Ovo'>Project</h2>
			<h3 className='text-center font-Ovo text-gray-500'>Highlighted projects I have worked on recently.</h3>

			{workData.map(({ title, description, bgImage, techStack }, index) => (
				<div
					className='grid grid-cols-1 md:grid-cols-2 my-10 gap-4 dark:text-white dark:bg-darkCard bg-white shadow-md rounded-lg w-full '
					key={index}
				>
					<div className=' bg-gray-300 dark:bg-darkCardSecondary  rounded-l-lg p-12'>
						<Image
							src={bgImage}
							alt='work image'
							width={500}
							height={500}
							className='max-h-[500px] object-contain'
						/>
					</div>
					<div className='p-12 flex flex-col gap-4'>
						<p className='font-semibold'>{title}</p>
						<p className='whitespace-pre-line'>{description}</p>
						<div className='flex gap-2 flex-wrap'>
							{techStack.map((tech, index) => (
								<div
									className='dark:bg-darkCardSecondary bg-gray-300 w-fit rounded-lg px-2'
									key={index}
								>
									{tech}
								</div>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Work;

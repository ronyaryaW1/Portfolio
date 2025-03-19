import { experienceList } from '@/assets/assets';
import React from 'react';


const Experience = () => {
	return (
		<div
			id='experience'
			className='w-full px-[12%] py-10 scroll-mt-20'
		>
			<h2 className='text-center text-5xl font-Ovo'>Experience</h2>
			<h3 className='text-center font-Ovo text-gray-500'>Here is a quick summary of my most recent experiences</h3>
			{experienceList.map(({ title, company, date, jobDesc }, index) => (
				<div
					className='grid grid-cols-1 md:grid-cols-3 my-10 gap-4 dark:text-white dark:bg-darkCard bg-white shadow-md px-5 rounded-lg py-5 w-full'
					key={index}
                >
                    <div>
                        <p className='font-semibold'>{company}</p>
                        <p>{date}</p>
                    </div>
					<div className='col-span-2'>
						<p className='font-semibold'>{title}</p>
						<ul>
							{jobDesc.map((desc, index) => (
								<li className='list-disc' key={index}>{desc}</li>
							))} 
						</ul>
					</div>
					
				</div>
			))}
		</div>
	);
};

export default Experience;

import { assets } from '@/assets/assets'
import { useDarkMode } from '@/context/ThemeContext';
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  const { darkMode } = useDarkMode();
  return (
		<div className='mt-20'>
			<div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
				<p>Rony Arya Wijaya</p>
				<div className='text-center'>
					<div className='w-max flex items-center gap-2 mx-auto'>
						<Image
							src={darkMode ? assets.mail_icon_dark : assets.mail_icon}
							alt=''
							className='w-6'
						/>
						ronyaryaw02@gmail.com
					</div>
				</div>

				<ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
					<li>
						<a
							target='_blank'
							href='https://github.com/ronyaryaW1?tab=overview&from=2025-03-01&to=2025-03-11'
						>
							Github
						</a>
					</li>
					<li>
						<a
							target='_blank'
							href='https://www.linkedin.com/in/rony-arya-wijaya-627b22193/'
						>
							Linkedin
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Footer
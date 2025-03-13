import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { assets } from '@/assets/assets';
import { useDarkMode } from '@/context/ThemeContext';

export const Navbar = () => {
	const [isScrolled, setIsScrolled] = React.useState(false);
	const sideMenuRef = useRef<HTMLUListElement>(null);
	const { setDarkMode, darkMode } = useDarkMode();

	const openMenu = () => {
		if (sideMenuRef.current) {
			sideMenuRef.current.style.transform = 'translateX(-16rem)';
		}
	};

	const closeMenu = () => {
		if (sideMenuRef.current) {
			sideMenuRef.current.style.transform = 'translateX(16rem)';
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		});
	}, []);

	return (
		<>
			<div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden '>
				<Image
					src={assets.header_bg_color}
					alt=''
					className='w-full'
				/>
			</div>
			<nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScrolled ? ' bg-white/50 backdrop-blur-md shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ''}`}>
				<a href='#top'>
					<Image
						src={darkMode ? assets.logo_dark : assets.logo}
						alt='logo'
						className='w-28 cursor-pointer mr-14'
					/>
				</a>

				<ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScrolled ? '' : 'bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent'} `}>
					<li>
						<a
							className='!font-Ovo'
							href='#top'
						>
							Home
						</a>
					</li>
					<li>
						<a
							className='!font-Ovo'
							href='#about'
						>
							About
						</a>
					</li>
					<li>
						<a
							className='!font-Ovo'
							href='#services'
						>
							Services
						</a>
					</li>
					<li>
						<a
							className='!font-Ovo'
							href='#work'
						>
							My Work
						</a>
					</li>
					<li>
						<a
							className='!font-Ovo'
							href='#contact'
						>
							Contact Me
						</a>
					</li>
				</ul>

				<div className='flex items-center gap-4'>
					<button onClick={() => setDarkMode(!darkMode)}>
						<Image
							src={darkMode ? assets.sun_icon : assets.moon_icon}
							alt=''
							className='w-6'
						/>
					</button>

					<a
						className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 !font-Ovo dark:border-white/50'
						href='#contact'
					>
						Contact
						<Image
							src={darkMode ? assets.arrow_icon_dark : assets.arrow_icon}
							alt='arrow_icon'
							className='w-3'
						/>
					</a>

					<button
						className='block md:hidden ml-3'
						onClick={openMenu}
					>
						<Image
							src={darkMode ? assets.menu_white : assets.menu_black}
							alt=''
							className='w-6 '
						/>
					</button>
				</div>

				{/* --------mobile menu -------- */}
				<ul
					ref={sideMenuRef}
					className='flex md:hidden flex-col gap-4 px-10 py-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkTheme dark:text-white'
				>
					<div
						className='absolute right-6 top-6'
						onClick={closeMenu}
					>
						<Image
							src={darkMode ? assets.close_white : assets.close_black}
							alt='close'
							className='cursor-pointer w-5'
						/>
					</div>

					<li>
						<a
							className='!font-Ovo'
							onClick={closeMenu}
							href='#top'
						>
							Home
						</a>
					</li>
					<li>
						<a
							className='!font-Ovo'
							onClick={closeMenu}
							href='#about'
						>
							About
						</a>
					</li>
					<li>
						<a
							className='!font-Ovo'
							onClick={closeMenu}
							href='#services'
						>
							Services
						</a>
					</li>
					<li>
						<a
							className='!font-Ovo'
							onClick={closeMenu}
							href='#work'
						>
							My Work
						</a>
					</li>
					<li>
						{' '}
						<a
							className='!font-Ovo'
							onClick={closeMenu}
							href='#contact'
						>
							Contact Me
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

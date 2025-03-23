'use client';

// import { useTranslations } from 'next-intl';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import { Navbar } from './components/Navbar';
import Work from './components/Work';
import { ThemeProvider } from '@/context/ThemeContext';

export default function Home() {
	// const t = useTranslations('HomePage');
	return (
		<>
			{/* <h1>{t('title')}</h1> */}
			<ThemeProvider>
				<Navbar />
				<Header />
				<About />
				<Experience />
				<Work />
				<Contact />
				<Footer />
			</ThemeProvider>
		</>
	);
}

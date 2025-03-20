'use client';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import { Navbar } from './components/Navbar';
import Work from './components/Work';
import { ThemeProvider } from '@/context/ThemeContext';
import {useTranslations} from 'next-intl';

export default function Home() {
	const t = useTranslations('HomePage');

	return (
		<>
			<ThemeProvider>
			<h1>{t('title')}</h1>
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

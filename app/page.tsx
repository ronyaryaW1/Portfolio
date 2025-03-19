'use client';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import { Navbar } from './components/Navbar';
import Work from './components/Work';
import { ThemeProvider } from '@/context/ThemeContext';

export default function Home() {
	return (
		<>
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

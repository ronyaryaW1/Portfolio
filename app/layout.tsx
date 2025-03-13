import type { Metadata } from "next";
import { Outfit, Ovo } from 'next/font/google';
import './globals.css';

const outfitFonts = Outfit({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

const ovoFonts = Ovo({
	subsets: ['latin'],
	weight: ['400'],
});

export const metadata: Metadata = {
	title: 'Portfolio - Rony Wijaya',
	description: "Rony Wijaya's portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className='scroll-smooth dark'
		>
			<body className={`${outfitFonts.className} ${ovoFonts.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>{children}</body>
		</html>
	);
}

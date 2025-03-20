import type { Metadata } from "next";
import { Outfit, Ovo } from 'next/font/google';
import './globals.css';
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import {routing} from '@/i18n/routing';

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

export default async function LocaleLayout({
	children,
	params
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{locale: string}>;
}>) {
	const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
	
	return (
		<html
			lang={locale}
			className='scroll-smooth dark'
		>
			<body className={`${outfitFonts.className} ${ovoFonts.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
			<NextIntlClientProvider>{children}</NextIntlClientProvider></body>
		</html>
	);
}

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Contact = () => {
	const accessKey = 'a5c66fed-30f5-4b56-a6e7-e0204d5f633f';

	const [result, setResult] = React.useState('');

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setResult('Sending....');
		const formData = new FormData(event.target as HTMLFormElement);

		formData.append('access_key', accessKey);

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult('Form Submitted Successfully');
			(event.target as HTMLFormElement).reset();
		} else {
			console.log('Error', data);
			setResult(data.message);
		}
	};
	return (
		<div
			id='contact'
			className='w-full px-[12%] py-10 scroll-mt-20 bg-[url(/footer-bg-color.png)]  bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
		>
			<h4 className='text-center mb-2 text-lg font-Ovo'>Connect with me</h4>
			<h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>

			<p className='max-w-2xl mx-auto font-Ovo text-center mt-5 mb-12'>I&apos;d love to hear from you! Please feel free to contact me if you have any questions or feedback or would like to work together.</p>

			<form
				className='max-w-2xl mx-auto'
				onSubmit={onSubmit}
			>
				<div className='grid md:grid-cols-2 sm:grid-cols-1 gap-6 mt-10 mb-8'>
					<input
						type='text'
						name='name'
						placeholder='Enter your name'
						required
						className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
					/>
					<input
						type='email'
						name='email'
						placeholder='Enter your email'
						required
						className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
					/>
				</div>

				<textarea
					rows={6}
					placeholder='Enter your message'
					name='message'
					required
					className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 w-full dark:bg-darkHover/30 dark:border-white/90'
				></textarea>

				<button
					type='submit'
					className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
				>
					Submit now{' '}
					<Image
						src={assets.right_arrow_white}
						className='w-4'
						alt=''
					/>{' '}
				</button>

				<p className='mt-4'>{result}</p>
			</form>
		</div>
	);
};

export default Contact;

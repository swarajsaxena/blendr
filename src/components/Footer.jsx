import React from 'react';
import { TbColorSwatch, TbPigMoney } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='footer grid gap-4 items-center flex-col w-full max-w-[1440px] px-4 sm:px-8 md:px-16 py-16'>
			<div className='flex flex-col gap-2 h-full justify-between'>
				<TbColorSwatch className='text-6xl text-blue-600' />
				<div className='font-bold text-2xl'>BlendR</div>
				<div>
					Seamlessly Visualize, Test, and Optimize Color Schemes with Real-time
					Feedback. Revolutionize your workflow today!
				</div>
				<a
					href='https://www.buymeacoffee.com/swarajs'
					className='w-max px-2 md:px-4 py-2 rounded-md font-medium bg-yellow-400 flex items-center'
					target='_blank'
				>
					<span className='hidden md:block'>Buy Me A Coffee</span>
					<div className='md:hidden flex items-center justify-center h-8 w-8'>
						<TbPigMoney className='text-lg' />
					</div>
				</a>
			</div>
			<div className='flex flex-col items-end h-full'>
				<div className='flex flex-col items-start gap-2'>
					<div className='font-medium text-lg border-b-2 border-blue-600'>
						Site Map
					</div>
					<Link to='/'>Home</Link>
					<Link to='/generate-pallete'>Generate Pallete</Link>
				</div>
			</div>
			<div className='flex flex-col items-end h-full'>
				<div className='flex flex-col items-start gap-2'>
					<div className='font-medium text-lg border-b-2 border-blue-600'>
						Links
					</div>
					<a href='https://www.linkedin.com/in/swaraj-saxena-184b1b1a7/'>
						LinkedIn
					</a>
					<a href='https://github.com/swarajsaxena'>Github</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;

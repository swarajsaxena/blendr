import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { TbColorFilter, TbColorSwatch, TbPigMoney } from 'react-icons/tb';
import chroma from 'chroma-js';

const Navbar = () => {
	return (
		<div className='p-8 py-4 flex items-center w-full justify-between bg-white/50 backdrop-blur-lg z-50 sticky top-0 border-b-2 border-[#94A3B8]/5'>
			<div className='flex items-center gap-2'>
        <TbColorSwatch className='text-2xl text-blue-600' />
				<span className='font-bold text-2xl'>BlendR</span>
			</div>
			<div className='flex items-center gap-4'>
				<Link
					className='font-medium hover:-translate-y-1 transition-all'
					to={'/'}
				>
					<span className='hidden md:block'>Home</span>
					<div className='md:hidden flex items-center justify-center h-8 w-8'>
						<FiHome className='text-lg' />
					</div>
				</Link>
				<Link
					className='font-medium hover:-translate-y-1 transition-all'
					to={'/generate-pallete'}
				>
					<span className='hidden md:block'>Generate Pallete</span>
					<div className='md:hidden flex items-center justify-center h-8 w-8'>
						<TbColorFilter className='text-lg' />
					</div>
				</Link>
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
		</div>
	);
};

export default Navbar;

export const NavbarPrimary = ({ primaryButtonColor, backgroundColor }) => {
	var color = chroma(primaryButtonColor);
	return (
		<div
			style={{ background: backgroundColor + '7f' }}
			className='p-8 py-4 flex items-center w-full justify-between backdrop-blur-lg z-50 sticky top-0 border-b-2 border-[#94A3B8]/5'
		>
			<div className='flex items-center gap-2'>
        <TbColorSwatch className='text-2xl text-blue-600' />
				<span className='font-bold text-2xl'>BlendR</span>
			</div>
			<div className='flex items-center gap-4'>
				<Link
					className='font-medium hover:-translate-y-1 transition-all'
					to={'/'}
				>
					<span className='hidden md:block'>Home</span>
					<div className='md:hidden flex items-center justify-center h-8 w-8'>
						<FiHome className='text-lg' />
					</div>
				</Link>
				<Link
					className='font-medium hover:-translate-y-1 transition-all'
					to={'/generate-pallete'}
				>
					<span className='hidden md:block'>Generate Pallete</span>
					<div className='md:hidden flex items-center justify-center h-8 w-8'>
						<TbColorFilter className='text-lg' />
					</div>
				</Link>
				<a
					style={{
						backgroundColor: primaryButtonColor,
						color: color.get('hsl.l') < 0.5 ? 'white' : 'black',
					}}
					href='https://www.buymeacoffee.com/swarajs'
					className='w-max px-2 md:px-4 py-2 rounded-md font-medium flex items-center'
					target='_blank'
				>
					<span className='hidden md:block'>Buy Me A Coffee</span>
					<div className='md:hidden flex items-center justify-center h-8 w-8'>
						<TbPigMoney className='text-lg' />
					</div>
				</a>
			</div>
		</div>
	);
};

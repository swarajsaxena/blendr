import React from 'react';

const Navbar = () => {
	return (
		<div className='flex items-center w-full justify-center bg-white/50 backdrop-blur-lg z-50 sticky top-0 border-b-2 border-[#94A3B8]/5'>
			<div className='p-4 py-6 flex items-center gap-4 w-full max-w-[1440px]  '>
				<span className='font-bold text-2xl'>BlendR</span>
			</div>
		</div>
	);
};

export default Navbar;

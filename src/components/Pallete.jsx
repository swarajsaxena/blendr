import React from 'react';
import { FiCopy } from 'react-icons/fi';

const Pallete = ({ colors, title }) => {
	function copyToClipboard(text) {
		const el = document.createElement('textarea');
		el.value = text;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
	}
	return (
		<div className='w-full flex flex-col gap-2 items-start'>
			<h3 className='text-xl font-semibold'>{title}</h3>
			<div className='flex items-center gap-4 w-full'>
				{colors.map(color => {
					console.log(color);
					return (
						<div
							style={{ background: color }}
							className={`swatch p-4 flex-1 h-24 rounded-md flex justify-center items-center`}
						>
							<div
								onClick={() => copyToClipboard(color)}
								className='swatch-text flex gap-2 items-center opacity-0 bg-white/20 hover:bg-white/40 px-2 py-1 text-white rounded-md transition-all cursor-pointer'
							>
								{color}
								<FiCopy />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Pallete;

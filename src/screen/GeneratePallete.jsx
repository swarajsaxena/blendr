import React, { useState } from 'react';
import {
	generateAnalogousColors,
	generateComplementaryColors,
	generateCompoundColors,
	generateDoubleSplitComplementaryColors,
	generateMonochromaticColors,
	generateShadesColors,
	generateSplitComplementaryColors,
	generateSquareColors,
	generateTriadicColors,
} from '../utils/collorShemes';
import Pallete from '../components/Pallete';

const GeneratePallete = () => {
	const [mainColor, setMainColor] = useState('#3b5fe2');

	const [analogousColors, setAnalogousColors] = useState(
		generateAnalogousColors(mainColor)
	);
	const [monochromaticColors, setMonochromaticColors] = useState(
		generateMonochromaticColors(mainColor)
	);
	const [triadicColors, setTriadicColors] = useState(generateTriadicColors(mainColor));
	const [complementaryColors, setComplementaryColors] = useState(
		generateComplementaryColors(mainColor)
	);
	const [splitComplementaryColors, setSplitComplementaryColors] = useState(
		generateSplitComplementaryColors(mainColor)
	);
	const [doubleSplitComplementaryColors, setDoubleSplitComplementaryColors] = useState(
		generateDoubleSplitComplementaryColors(mainColor)
	);
	const [squareColors, setSquareColors] = useState(generateSquareColors(mainColor));
	const [compoundColors, setCompoundColors] = useState(
		generateCompoundColors(mainColor)
	);
	const [shadesColors, setShadesColors] = useState(generateShadesColors(mainColor));

	return (
		<div className='relative flex items-center flex-col w-full max-w-[1440px] px-16 py-16'>
			<div className='text-left text-2xl font-semibold'>
				Curated Palletes For You
			</div>
			<div
				style={{ background: mainColor }}
				className={`swatch p-4 px-20 rounded-md flex justify-center items-center`}
			>
				<div className='swatch-text flex gap-2 items-center opacity-0 bg-white/20 hover:bg-white/40 px-2 py-1 text-white rounded-md transition-all cursor-pointer'>
					{mainColor}
				</div>
			</div>
			<div className='w-full flex flex-col gap-2'>
				<Pallete colors={analogousColors} title={'analogous Colors'} />
				<Pallete colors={monochromaticColors} title={'monochromatic Colors'} />
				<Pallete colors={triadicColors} title={'triadic Colors'} />
				<Pallete colors={complementaryColors} title={'complementary Colors'} />
				<Pallete
					colors={splitComplementaryColors}
					title={'split Complementary Colors'}
				/>
				<Pallete
					colors={doubleSplitComplementaryColors}
					title={'double Split Complementary Colors'}
				/>
				<Pallete colors={squareColors} title={'square Colors'} />
				<Pallete colors={compoundColors} title={'compound Colors'} />
				<Pallete colors={shadesColors} title={'shades Colors'} />
			</div>
		</div>
	);
};

export default GeneratePallete;

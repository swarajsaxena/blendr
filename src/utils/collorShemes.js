import chroma from 'chroma-js';

export const generateAnalogousColors = color => {
	const baseColor = chroma(color);
	const scheme = [];
	scheme.push(color);

	for (let i = 1; i <= 4; i++) {
		const analogousColor = baseColor.set(
			'hsl.h',
			(baseColor.get('hsl.h') + i * 30) % 360
		);
		scheme.push(analogousColor.hex());
	}

	return scheme;
};

export const generateMonochromaticColors = color => {
	const baseColor = chroma(color);
	const scheme = [color];

	for (let i = 1; i <= 4; i++) {
		const monochromaticColor = baseColor.darken(i / 5).hex();
		scheme.push(monochromaticColor);
	}

	return scheme;
};

export const generateTriadicColors = color => {
	const baseColor = chroma(color);
	const scheme = [color];

	for (let i = 1; i <= 4; i++) {
		const triadicColor = baseColor.set(
			'hsl.h',
			(baseColor.get('hsl.h') + i * 120) % 360
		);
		scheme.push(triadicColor.hex());
	}

	return scheme;
};

export const generateComplementaryColors = color => {
	const baseColor = chroma(color);
	const complementaryColor = baseColor.set(
		'hsl.h',
		(baseColor.get('hsl.h') + 180) % 360
	);
	const scheme = [color, complementaryColor.hex()];

	for (let i = 1; i <= 3; i++) {
		const interpolatedColor = chroma.mix(
			color,
			complementaryColor.hex(),
			i / 4,
			'rgb'
		);
		scheme.push(interpolatedColor.hex());
	}

	return scheme;
};

export const generateSplitComplementaryColors = color => {
	const baseColor = chroma(color);
	const complementaryColor = baseColor.set(
		'hsl.h',
		(baseColor.get('hsl.h') + 180) % 360
	);
	const splitComplementary1 = baseColor.set(
		'hsl.h',
		(baseColor.get('hsl.h') + 150) % 360
	);
	const splitComplementary2 = baseColor.set(
		'hsl.h',
		(baseColor.get('hsl.h') + 210) % 360
	);
	const scheme = [
		color,
		splitComplementary1.hex(),
		splitComplementary2.hex(),
		complementaryColor.hex(),
	];

	for (let i = 1; i <= 1; i++) {
		const interpolatedColor1 = chroma.mix(
			color,
			splitComplementary1.hex(),
			i / 2,
			'rgb'
		);
		const interpolatedColor2 = chroma.mix(
			color,
			splitComplementary2.hex(),
			i / 2,
			'rgb'
		);
		scheme.push(interpolatedColor1.hex());
	}

	return scheme;
};

export const generateDoubleSplitComplementaryColors = color => {
	const baseColor = chroma(color);
	const scheme = [color];

	const complementary1 = baseColor.set('hsl.h', (baseColor.get('hsl.h') + 180) % 360);
	const complementary2 = baseColor.set('hsl.h', (baseColor.get('hsl.h') + 180) % 360);
	const splitComplementary1 = baseColor.set(
		'hsl.h',
		(baseColor.get('hsl.h') + 150) % 360
	);
	const splitComplementary2 = baseColor.set(
		'hsl.h',
		(baseColor.get('hsl.h') + 210) % 360
	);
	const doubleSplitComplementary1 = baseColor.set(
		'hsl.h',
		(baseColor.get('hsl.h') + 30) % 360
	);

	scheme.push(
		complementary1.hex(),
		complementary2.hex(),
		splitComplementary2.hex(),
		doubleSplitComplementary1.hex()
	);

	return scheme;
};

export const generateSquareColors = color => {
	const baseColor = chroma(color);
	const scheme = [color];

	for (let i = 1; i <= 4; i++) {
		const squareColor = baseColor.set(
			'hsl.h',
			(baseColor.get('hsl.h') + i * 90) % 360
		);
		scheme.push(squareColor.hex());
	}

	return scheme;
};

export const generateCompoundColors = color => {
	const baseColor = chroma(color);
	const compound1 = baseColor.set('hsl.h', (baseColor.get('hsl.h') + 30) % 360);
	const compound2 = baseColor.set('hsl.h', (baseColor.get('hsl.h') + 180) % 360);
	const compound3 = baseColor.set('hsl.h', (baseColor.get('hsl.h') + 210) % 360);
	const compound4 = baseColor.set('hsl.h', (baseColor.get('hsl.h') + 330) % 360);
	const scheme = [
		color,
		compound1.hex(),
		compound2.hex(),
		compound3.hex(),
		compound4.hex(),
	];

	return scheme;
};

export const generateShadesColors = color => {
	const baseColor = chroma(color);
	const scheme = [color];

	for (let i = 1; i <= 4; i++) {
		const shadeColor = baseColor.darken(i / 0.5).hex();
		scheme.push(shadeColor);
	}

	return scheme;
};

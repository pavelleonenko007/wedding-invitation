export const animation = {
	initial: {
		opacity: 0,
		filter: 'blur(5px)',
	},
	draw: (x = 0) => ({
		opacity: 1,
		filter: 'blur(0px)',
		transition: {
			duration: 1,
			delay: 0.5 + x * 0.5,
		},
	}),
};

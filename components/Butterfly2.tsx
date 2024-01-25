'use client';
import { motion } from 'framer-motion';

const animation = {
	initial: {
		pathLength: 0,
	},
	draw: {
		pathLength: 1,
		transition: {
			duration: 1,
			delay: 1,
		},
	},
};

export default function Butterfly2({
	className,
}: {
	className?: string;
}): JSX.Element {
	return (
		<svg
			width="37"
			height="37"
			viewBox="0 0 37 37"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<motion.path
				variants={animation}
				initial="initial"
				animate="draw"
				d="M36 14.822C36 14.822 25.41 25.0068 21.7031 31.7965C19.1729 36.4313 21.7295 35.9914 24.884 31.8449C28.0386 27.6983 31.5686 23.5518 26.1609 12.7852C20.7533 2.01855 14.1435 3.98267 13.693 4.34635C13.2424 4.71002 8.51059 14.7493 11.4398 21.2965C14.3691 27.8437 18.4248 27.2618 18.6501 26.2433C18.8754 25.2247 14.5941 20.2052 9.78748 24.4247C4.98059 28.6441 3.85389 33.0817 1 31.481C1 31.481 1.70071 36.2289 10.6138 35.9914C18.8005 35.7732 27.8135 25.2654 30.2169 18.5C32.6202 11.7345 30.4421 3.32779 27.5129 1C27.5129 1 23.9078 1.72736 22.9313 6.3832"
				stroke="#40404C"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

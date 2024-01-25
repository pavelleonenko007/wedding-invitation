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

export default function Butterfly({
	className,
}: {
	className?: string;
}): JSX.Element {
	return (
		<motion.svg
			width="23"
			height="27"
			viewBox="0 0 23 27"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			variants={animation}
		>
			<motion.path
			variants={animation}
				initial="initial"
				animate="draw"
				d="M1.45363 14.7473C1.45363 14.7473 0.432958 15.4229 1.45363 16.3801C2.47431 17.3372 9.44892 20.7155 12.2275 23.4745C15.0061 26.2335 13.5316 26.6276 11.3769 25.1637C9.22223 23.6998 6.61378 19.3078 10.9234 21.1661C15.2329 23.0241 16.9341 25.9521 19.6559 25.389C22.3777 24.8258 21.8673 22.7427 20.96 21.7292C20.0527 20.7157 22.9216 19.9275 21.6855 18.3509C20.4497 16.7743 18.0113 14.8598 14.0987 15.6482C10.1861 16.4364 12.7378 16.9995 14.7792 16.7743C16.8205 16.549 19.1453 14.128 17.898 12.495C16.6504 10.8622 12.4544 10.468 12.0008 8.66611C11.5472 6.86441 12.7573 1.96585 11.5001 1.40274C10.2429 0.839622 6.38709 2.64151 5.1963 6.80804C4.00551 10.9746 5.25042 16.6287 5.93351 18.0692C5.93351 18.0692 2.70138 13.7338 2.4745 7.65262C2.24762 1.57165 4.68596 -0.00495803 5.1963 1.57165C5.70664 3.14826 6.51778 3.1125 6.51778 3.1125"
				stroke="#40404C"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</motion.svg>
	);
}

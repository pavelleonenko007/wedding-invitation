'use client';
import { motion } from 'framer-motion';

const animation = {
	initial: {
		opacity: 0,
		filter: 'blur(5px)'
	},
	enter: {
		opacity: 1,
		filter: 'blur(0px)'
	}
};

export default function Ampersand() {
	return (
		<motion.span variants={animation} initial="initial" animate="enter" className="font-aquarelle text-2xl">&</motion.span>
	);
}

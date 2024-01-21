'use client';
import { motion } from 'framer-motion';
const animation = {
	initial: {
		scaleX: 0
	},
	draw: {
		scaleX: 1,
		transition: {
			duration: 2,
			ease: [0, 0.55, 0.45, 1]
		}
	}
}

export default function NamesSeparator({ side }: { side: 'left' | 'right' }) {
	return <motion.div variants={animation} initial="initial" animate="draw" className={`w-[6rem] h-[1px] bg-[#947744] origin-${side}`}></motion.div>;
}

'use client';
import { shuffle } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function Name({ name }: { name: string }) {
	const chars = name.split('');
	const indexes = shuffle(Array.from({length: chars.length}, (_, index) => index));

	const animations = {
		initial: {
			opacity: 0,
			filter: 'blur(5px)',
			scale: 2,
		},
		enter: (i: number) => ({
			opacity: 1,
			filter: 'blur(0px)',
			scale: 1,
			transition: {
				duration: 1,
				delay: 0.5 + indexes[i] * 0.25,
			},
		}),
	};

	return (
		<p className="font-baskerville text-3xl uppercase tracking-[0.7rem]">
			{chars.map((char, i) => (
				<motion.span
					className="inline-flex"
					variants={animations}
					initial="initial"
					animate="enter"
					key={`c_${i}`}
					custom={i}
				>
					{char}
				</motion.span>
			))}
		</p>
	);
}

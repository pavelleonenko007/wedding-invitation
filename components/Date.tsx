'use client';
import { motion } from 'framer-motion';

const opacityAnim = {
	initial: {
		opacity: 0,
		filter: 'blur(5px)',
		scale: 1.1,
	},
	show: (i: number) => ({
		opacity: 1,
		filter: 'blur(0px)',
		scale: 1,
		transition: {
			duration: 1,
			delay: 1 + i * 0.5,
		},
	}),
};
const borderAnim = {
	initial: {
		scaleY: 0,
	},
	scale: {
		scaleY: 1,
		transition: {
			delay: 3.5,
			duration: 1
		},
	},
};

export default function Date() {
	return (
		<>
			<motion.div
				variants={opacityAnim}
				initial="initial"
				animate="show"
				custom={4}
				className="relative px-3 tracking-[0.2rem]"
			>
				<motion.div variants={borderAnim} initial="initial" animate="scale" className="absolute h-full w-[1px] bg-black top-0 right-0" />
				Суббота
			</motion.div>
			<div className="flex relative flex-col justify-center items-center gap-2 px-2">
				<motion.span
					variants={opacityAnim}
					initial="initial"
					animate="show"
					custom={1}
					className="text-sm origin-center tracking-[0.2rem]"
				>
					Апрель
				</motion.span>
				<motion.span
					variants={opacityAnim}
					initial="initial"
					animate="show"
					className="text-5xl"
					custom={0}
				>
					06
				</motion.span>
				<motion.span
					variants={opacityAnim}
					initial="initial"
					animate="show"
					custom={3}
					className="text-lg tracking-[0.2rem]"
				>
					2024
				</motion.span>
			</div>
			<motion.div
				variants={opacityAnim}
				initial="initial"
				animate="show"
				custom={2}
				className="relative px-3 tracking-[0.1rem] normal-case"
			>
				<motion.div variants={borderAnim} initial="initial" animate="scale" className="absolute h-full w-[1px] bg-black top-0 left-0" />
				в 15ч 30мин
			</motion.div>
		</>
	);
}

'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ButtonHTMLAttributes } from 'react';

const textAnim = {
	initial: {
		opacity: 0,
		filter: 'blur(5px)',
	},
	enter: {
		opacity: 1,
		filter: 'blur(0px)',
		transition: {
			delay: 1,
			duration: 1
		}
	}
}
const horizontalAnim = {
	initial: {
		scaleX: 0,
	},
	line: (x: number) => ({
		scaleX: 1,
		transition: {
			delay: 0.5 + x * 0.25,
		},
	}),
};
const verticalAnim = {
	initial: {
		scaleY: 0,
	},
	line: (x: number) => ({
		scaleY: 1,
		transition: {
			delay: 0.5 + x * 0.25,
		},
	}),
};

export default function DrawingButton({
	className,
	children,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
	const classes = cn(
		'relative flex justify-center items-center w-full h-10 p-[0.5rem] font-baskerville uppercase text-black tracking-[0.2rem] text-sm hover:bg-[#947744] hover:text-white',
		className
	);
	return (
		<button className={classes} {...props}>
			<motion.div
				variants={horizontalAnim}
				initial="initial"
				animate="line"
				custom={1}
				className="h-[1px] w-full bg-[#947744] absolute top-0 left-0 origin-left p-"
			></motion.div>
			<motion.div
				variants={verticalAnim}
				initial="initial"
				animate="line"
				custom={2}
				className="h-full w-[1px] bg-[#947744] absolute top-0 right-0 origin-top"
			></motion.div>
			<motion.div
				variants={horizontalAnim}
				initial="initial"
				animate="line"
				custom={3}
				className="h-[1px] w-full bg-[#947744] absolute bottom-0 right-0 origin-right"
			></motion.div>
			<motion.div
				variants={verticalAnim}
				initial="initial"
				animate="line"
				custom={4}
				className="h-full w-[1px] bg-[#947744] absolute bottom-0 left-0 origin-bottom"
			></motion.div>
			<motion.span variants={textAnim} initial="initial" animate="enter">{children}</motion.span>
		</button>
	);
}

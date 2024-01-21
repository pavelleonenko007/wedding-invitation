'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ButtonHTMLAttributes } from 'react';

const lineAnim = {
	initial: {
		scaleX: 0,
	},
	draw: {
		scaleX: 1,
		transition: {
			delay: 2,
			duration: 1,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};
const textAnim = {
	initial: {
		y: '100%',
	},
	enter: {
		y: 1,
		transition: {
			delay: 2.5,
			transition: 1,
			ease: [0.65, 0, 0.35, 1],
		},
	},
};

export default function CancelButton({
	className,
	children,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
	const classNames = cn(
		'w-full h-10 flex justify-center items-center text-sm text-[#947744] font-baskerville',
		className
	);
	return (
		<button type="button" className={classNames} {...props}>
			<div className="inline-flex flex-col overflow-hidden">
				<motion.div variants={textAnim} initial="initial" animate="enter">
					{children}
				</motion.div>
				<motion.div
					variants={lineAnim}
					initial="initial"
					animate="draw"
					className="w-full h-[1px] bg-[#947744]"
				></motion.div>
			</div>
		</button>
	);
}

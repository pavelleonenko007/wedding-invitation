'use client';
import { motion } from 'framer-motion';
import { animation } from './anim';

const images = {
	flower: '/img/floral/Flower.svg',
	flower2: '/img/floral/Flower2.svg',
	flower3: '/img/floral/Flower3.svg',
	flower4: '/img/floral/Flower4.svg',
	rose: '/img/floral/Rose.svg',
	branch: '/img/floral/Branch.svg',
	branch2: '/img/floral/Branch2.svg',
	branch3: '/img/floral/Branch3.svg',
	branch4: '/img/floral/Branch4.svg',
	branch5: '/img/floral/Branch5.svg',
};

type FloralKeys = keyof typeof images;

export default function index({
	className,
	delayRatio = 0,
	variant = 'flower',
}: {
	className?: string;
	delayRatio?: number;
	variant?: FloralKeys;
}) {
	return (
		<motion.div
			className={className}
			variants={animation}
			initial="initial"
			animate="draw"
			custom={delayRatio}
		>
			<img src={images[variant]} className="object-contain" />
		</motion.div>
	);
}

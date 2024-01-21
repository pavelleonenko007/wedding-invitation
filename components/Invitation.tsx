'use client';
import { motion } from 'framer-motion';

export default function Invitation({ children }: React.PropsWithChildren) {
	const words = children?.toString().split(' ');
	const animation = {
		initial: {
			y: '100%',
		},
		enter: (i: number) => ({
			y: '0%',
			transition: {
				delay: 1.5 + i * 0.1,
				duration: 1,
				ease: [0.33, 1, 0.68, 1],
			},
		}),
	};
	return (
		<div className="font-baskerville text-center">
			{words?.map((word, i) => (
				<div key={`w-${i}`} className="overflow-hidden inline-flex">
					<motion.span
						variants={animation}
						initial="initial"
						animate="enter"
						className="inline-block"
						custom={i}
					>
						{word + ' '}
					</motion.span>
				</div>
			))}
		</div>
	);
}

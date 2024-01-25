'use client';
import { modifyGuestById } from '@/app/dashboard/actions';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { ButtonHTMLAttributes, useState } from 'react';
import Confetti from 'react-confetti';
import { Alert } from './Alert';
import { toast } from './ui/use-toast';

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
			duration: 1,
		},
	},
};
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
	const [success, setSuccess] = useState<boolean>(false);
	const [showConfetti, setShowConfetti] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const searchParams = useSearchParams();
	const guestId = searchParams.get('id') ?? '';
	const action = async () => {
		setIsLoading(true);

		const response = await modifyGuestById(guestId, {
			status: 'Придёт',
		});

		if (response.status !== 'bad') {
			setSuccess(true);
			setShowConfetti(true);
		} else {
			toast({
				title: response.message,
			});
		}

		setIsLoading(false);
	};
	const classes = cn(
		'relative flex justify-center items-center w-full h-10 p-[0.5rem] font-baskerville uppercase text-black tracking-[0.2rem] text-sm hover:bg-[#947744] hover:text-white',
		className
	);
	return (
		<>
			{showConfetti && <Confetti />}
			<Alert
				open={success}
				setIsOpen={() => setSuccess(false)}
				title="Спасибо, что вы с нами!"
				description="Ждём вас в ресторане «Палермо» (Торжественный зал) по адресу ул. Игуменка (Меридиан), 86; Советский район, Челябинск 06.04.2024 в 15:30"
			/>
			<button className={classes} onClick={action} {...props}>
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
				{isLoading ? (
					<Loader2 className="mr-2 h-4 w-4 animate-spin" />
				) : (
					<motion.span variants={textAnim} initial="initial" animate="enter">
						{children}
					</motion.span>
				)}
			</button>
		</>
	);
}

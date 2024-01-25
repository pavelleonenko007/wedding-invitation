'use client';
import { modifyGuestById } from '@/app/dashboard/actions';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { ButtonHTMLAttributes, useState } from 'react';
import { Alert } from './Alert';
import { useToast } from './ui/use-toast';

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
	const search = useSearchParams();
	const { toast } = useToast();
	const guestId = search.get('id') ?? '';
	const [canceled, setCanceled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const classNames = cn(
		'w-full h-10 flex justify-center items-center text-sm text-[#947744] font-baskerville',
		className
	);
	const action = async () => {
		const response = await modifyGuestById(guestId, {
			status: 'Не придёт',
		});

		if (response.status !== 'bad') {
			setCanceled(true);
		} else {
			toast({
				title: response.message,
			});
		}
	};
	return (
		<>
			<Alert
				open={canceled}
				setIsOpen={() => setCanceled(false)}
				title="Жаль, что вы не с нами!"
				description="Вы можете изменить своё решение до 23.03.2024, пройдя по этой же ссылке."
			/>
			<button type="button" className={classNames} onClick={action} {...props}>
				<div className="inline-flex flex-col overflow-hidden">
					{isLoading ? (
						<Loader2 className="h-4 w-4 animate-spin" />
					) : (
						<motion.div variants={textAnim} initial="initial" animate="enter">
							{children}
						</motion.div>
					)}
					<motion.div
						variants={lineAnim}
						initial="initial"
						animate="draw"
						className="w-full h-[1px] bg-[#947744]"
					></motion.div>
				</div>
			</button>
		</>
	);
}

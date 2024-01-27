'use client';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export function Alert({
	title,
	description,
	open = false,
	setIsOpen = () => {},
}: {
	title?: string;
	description?: string;
	open?: boolean;
	setIsOpen?: () => void;
}): JSX.Element {
	return (
		<AlertDialog open={open}>
			<AlertDialogContent className="p-[24rem] gap-[16rem] max-w-[512rem] rounded-none sm:rounded-none font-baskerville">
				<AlertDialogHeader>
					<AlertDialogTitle className='text-[18rem] leading-[28rem]'>{title}</AlertDialogTitle>
					<AlertDialogDescription className='text-[14rem] leading-[20rem]'>{description}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogAction
						onClick={setIsOpen}
						className="py-[8rem] px-[16rem] h-[40rem] bg-[#947744] rounded-none text-[14rem] leading-[20rem]"
					>
						Закрыть
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}

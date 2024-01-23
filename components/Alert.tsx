'use client';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle
} from '@/components/ui/alert-dialog';

export function Alert({
	title,
	description,
	open = false,
	setIsOpen = () => {}
}: {
	title?: string;
	description?: string;
	open?: boolean
	setIsOpen?: () => void
}): JSX.Element {
	return (
		<AlertDialog open={open}>
			<AlertDialogContent className='font-baskerville'>
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					<AlertDialogDescription>{description}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogAction onClick={setIsOpen} className='bg-[#947744] rounded-none'>Закрыть</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}

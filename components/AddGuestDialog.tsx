'use client';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useId, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Guest } from './GuestsTable';

interface IAddGuestForm {
	name: string;
	phone: string;
}

export const AddGuestDialog: React.FunctionComponent<{
	setData: React.Dispatch<React.SetStateAction<Guest[]>>;
}> = ({ setData }) => {
	const formId = useId();
	const userId = useId();
	const [open, setOpen] = useState(false);
	const { handleSubmit, register } = useForm<IAddGuestForm>({
		defaultValues: {
			name: '',
			phone: '',
		},
	});
	const submitHandler: SubmitHandler<IAddGuestForm> = (data) => {
		setData((prev) => [
			...prev,
			{
				id: userId,
				status: 'Неизвестно',
				...data,
			},
		]);

		setOpen(false);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="default">Добавить гостя</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Добавления гостя</DialogTitle>
					<DialogDescription>
						Заполните поля и нажмите кнопку сохранить, чтобы добавить гостя.
					</DialogDescription>
				</DialogHeader>
				<form id={formId} onSubmit={handleSubmit(submitHandler)}>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="name" className="text-right">
								Имя
							</Label>
							<Input
								{...register('name', {
									required: true,
								})}
								id="name"
								className="col-span-3"
								placeholder="Рифат Мажитов"
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="phone" className="text-right">
								Номер телефона
							</Label>
							<Input
								{...register('phone', {
									required: true,
									pattern:
										/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
								})}
								id="phone"
								type="tel"
								className="col-span-3"
								placeholder="+7..."
							/>
						</div>
					</div>
				</form>
				<DialogFooter>
					<Button form={formId} type="submit">
						Добавить нового гостя
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

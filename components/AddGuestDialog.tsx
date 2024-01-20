'use client';
import { addGuest } from '@/app/dashboard/actions';
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
import { PlusIcon } from 'lucide-react';
import { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormField } from './ui/form';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from './ui/select';

interface IAddGuestForm {
	name: string;
	phone: string;
	status: string;
}

export const AddGuestDialog = () => {
	const formId = useId();
	const [open, setOpen] = useState(false);
	const form = useForm<IAddGuestForm>({
		defaultValues: {
			name: '',
			phone: '',
			status: '',
		},
	});
	const action: () => void = form.handleSubmit(async (data) => {
		const response = await addGuest(data);

		if (response.status !== 'ok') {
			console.error(response.message);
			return;
		}

		setOpen(false);
	});

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="default" className='gap-2'>
					<PlusIcon />
					<span className="hidden sm:inline">Добавить гостя</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Добавления гостя</DialogTitle>
					<DialogDescription>
						Заполните поля и нажмите кнопку сохранить, чтобы добавить гостя.
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form id={formId} action={action}>
						<div className="grid gap-4 py-4">
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="name" className="text-right">
									Имя
								</Label>
								<Input
									{...form.register('name', {
										required: true,
									})}
									autoComplete="off"
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
									{...form.register('phone', {
										required: true,
										pattern:
											/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
									})}
									id="phone"
									type="tel"
									className="col-span-3"
									placeholder="+7..."
									autoComplete="off"
								/>
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="phone" className="text-right">
									Статус
								</Label>
								<FormField
									control={form.control}
									name="status"
									render={({ field }) => (
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<SelectTrigger className="col-span-3">
												<SelectValue placeholder="Выбрать" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="Неизвестно">Неизвестно</SelectItem>
												<SelectItem value="Придёт">Придёт</SelectItem>
												<SelectItem value="Не придёт">Не придёт</SelectItem>
											</SelectContent>
										</Select>
									)}
								/>
							</div>
						</div>
					</form>
				</Form>
				<DialogFooter className="flex flex-row justify-start sm:justify-start">
					<Button form={formId} type="submit">
						Добавить нового гостя
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

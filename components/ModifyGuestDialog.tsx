'use client';
import { modifyGuestById } from '@/app/dashboard/actions';
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
import { Guest } from '@prisma/client';
import { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DropdownMenuItem } from './ui/dropdown-menu';
import { Form, FormField } from './ui/form';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from './ui/select';
import { toast } from './ui/use-toast';

interface IGuestForm {
	name: string;
	phone: string;
	status: string;
	id: string;
}

export const ModifyGuestDialog = ({ guest }: { guest: Guest }) => {
	const formId = useId();
	const [open, setOpen] = useState(false);
	const form = useForm<IGuestForm>({
		defaultValues: guest,
	});
	const action: () => void = form.handleSubmit(async ({ id, ...data }) => {
		const response = await modifyGuestById(id, data);

		toast({
			title: response.message,
		});

		if (response.status !== 'ok') {
			console.error(response.message);
		}

		setOpen(false);
	});

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<DropdownMenuItem onSelect={(event) => event?.preventDefault()}>
					Изменить гостя
				</DropdownMenuItem>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Изменить гостя</DialogTitle>
					<DialogDescription>
						Заполните поля и нажмите кнопку сохранить, чтобы изменить гостя.
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
							<Input type="hidden" name="id" value={guest.id} />
						</div>
					</form>
				</Form>
				<DialogFooter className="flex flex-row justify-start sm:justify-start">
					<Button form={formId} type="submit">
						Изменить данные гостя
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

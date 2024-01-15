'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useId } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from './ui/form';
import { Input } from './ui/input';

export default function LoginForm() {
	const form = useForm({
		defaultValues: {
			username: '',
			password: '',
		},
	});
	const formId = useId();
	const router = useRouter();

	const onSubmit = async (values: { username: string; password: string }) => {
		const res = await signIn('credentials', {
			username: values.username,
			password: values.password,
			redirect: false,
		});

		console.log(res);

		if (!res?.error) {
			router.push('/dashboard');
		}
	};

	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Войти</CardTitle>
				<CardDescription>Введите логин и пароль</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form id={formId} onSubmit={form.handleSubmit(onSubmit)}>
						<div className="grid gap-4">
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Логин</FormLabel>
										<FormControl>
											<Input placeholder="Введите логин" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							></FormField>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Пароль</FormLabel>
										<FormControl>
											<Input
												type="password"
												placeholder="Введите пароль"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							></FormField>
						</div>
					</form>
				</Form>
			</CardContent>
			<CardFooter>
				<Button type="submit" form={formId}>
					Войти
				</Button>
				<Button variant="link" className="ml-auto">
					Забыл пароль?
				</Button>
			</CardFooter>
		</Card>
	);
}

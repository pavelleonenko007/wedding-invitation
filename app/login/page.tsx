import LoginForm from '@/components/LoginForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function index() {
	const session = await getServerSession();

	if (session) {
		redirect('/dashboard');
	}

	return (
		<main className="w-full">
			<div className="w-full flex flex-col justify-center items-center gap-6">
				<h1>Войти</h1>
				<LoginForm />
			</div>
		</main>
	);
}

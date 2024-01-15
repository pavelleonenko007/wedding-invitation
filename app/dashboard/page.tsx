import { getServerSession } from 'next-auth';

export default async function index() {
	const session = await getServerSession();

	console.log(session);

	return (
		<main>
			<h1>Dashboard</h1>
		</main>
	);
}

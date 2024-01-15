import Container from '@/components/Container';
import { GuestsTable } from '@/components/GuestsTable';

export default async function index() {
	return (
		<main className="w-full">
			<Container>
				<h1>Dashboard</h1>
				<GuestsTable />
			</Container>
		</main>
	);
}

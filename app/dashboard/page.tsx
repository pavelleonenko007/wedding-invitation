import Container from '@/components/Container';
import { GuestsTable } from '@/components/GuestsTable';
import { getGuests } from './actions';

export default async function index() {
	// unstable_noStore();
	const guests = await getGuests();
	
	return (
		<main className="w-full">
			<Container>
				<h1>Dashboard</h1>
				<GuestsTable data={guests}/>
			</Container>
		</main>
	);
}

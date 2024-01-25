import Container from '@/components/Container';
import { GuestsTable } from '@/components/GuestsTable';
import type { Metadata } from 'next';
import { getGuests } from './actions';

export const metadata: Metadata = {
	title: 'Панель управления гостями',
	description: 'Здесь можно добавлять гостей и изменять уже существующих',
};

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

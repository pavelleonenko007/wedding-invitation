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
			<div className="container px-4">
				<h1>Dashboard</h1>
				<GuestsTable data={guests} />
			</div>
		</main>
	);
}

import { GuestsTable } from '@/components/GuestsTable';
import Navbar from '@/components/Navbar';
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
			<div className="container flex flex-col gap-3 px-4">
				<Navbar />
				<h1 className=" text-3xl font-bold">Dashboard</h1>
				<GuestsTable data={guests} />
			</div>
		</main>
	);
}

'use server';
import prisma from '@/configs/db';
import { Guest } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export async function getGuests(): Promise<Guest[]> {
	const guests = (await prisma?.guest.findMany()) ?? [];
	return guests;
}

export async function getGuestById(guestId: string): Promise<Guest | null> {
	const guest =
		(await prisma?.guest.findUnique({
			where: {
				id: guestId,
			},
		})) ?? null;

	return guest;
}

export type NewGuest = {
	name: string;
	phone: string;
	status: string;
};

type GuestResponse = {
	status: 'ok' | 'bad';
	message: string;
	guest?: Guest;
};

export async function addGuest(guestData: NewGuest): Promise<GuestResponse> {
	console.log(guestData);
	const newGuest = await prisma?.guest.create({
		data: {
			...guestData,
		},
	});

	revalidatePath('/dashboard');

	return newGuest
		? { status: 'ok', message: 'Гость успешно добавлен' }
		: { status: 'bad', message: 'Ошибка добавления' };
}

export async function removeGuest(id: string): Promise<Guest> {
	const removedGuest = await prisma.guest.delete({
		where: {
			id,
		},
	});

	revalidatePath('/dashboard');

	return removedGuest;
}

export async function removeMultipleGuests(
	ids: string[]
): Promise<GuestResponse> {
	if (ids.length < 1) {
		return {
			status: 'bad',
			message: 'Выберите гостей, которых хотите удалить',
		};
	}

	try {
		const removedGuests = await prisma.guest.deleteMany({
			where: {
				id: {
					in: ids,
				},
			},
		});

		revalidatePath('/dashboard');

		return {
			status: 'ok',
			message: 'Выбранные гости удалены',
		};
	} catch (error) {
		return {
			status: 'bad',
			message: 'Something went wrong!',
		};
	}
}

export async function modifyGuestById(
	id: string,
	data: { name?: string; status?: string; phone?: string }
): Promise<GuestResponse> {
	const guest = await getGuestById(id);

	if (!guest)
		return {
			status: 'bad',
			message: 'Этого гостя нет в базе данных',
		};

	const updatedGuest = await prisma.guest.update({
		where: {
			id,
		},
		data,
	});

	revalidatePath('/dashboard');

	return {
		status: 'ok',
		message: `Гость ${updatedGuest.name} успешно обновлен`,
		guest: updatedGuest,
	};
}

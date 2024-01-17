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

	console.log(removedGuest);
	revalidatePath('/dashboard');

	return removedGuest;
}

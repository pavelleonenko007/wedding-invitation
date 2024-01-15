'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Navbar() {
	const session = useSession();
	return (
		<div className="flex justify-center gap-2 w-full p-4 fixed top-0 left-0 bg-white border-b-[1px] border-black">
			<Link href={'/'}>Home</Link>
			<Link href={'/dashboard'}>Dashboard</Link>
			{session.data?.user && <Link href={'#'} onClick={() => signOut()}>Sing Out</Link>}
		</div>
	);
}

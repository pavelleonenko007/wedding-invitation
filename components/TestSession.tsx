'use client';

import { useSession } from 'next-auth/react';

export default function TestSession() {
	const session = useSession();
	console.log(session);
	return <></>;
}

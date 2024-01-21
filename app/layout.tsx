import AuthProvider from '@/components/AuthProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className='w-full min-h-dvh'>
			<body suppressHydrationWarning={true} className={inter.className + ' flex w-full min-h-dvh' }>
				<AuthProvider>
					{/* <Navbar /> */}
					<div className="w-full min-h-dvh flex flex-1">{children}</div>
				</AuthProvider>
			</body>
		</html>
	);
}

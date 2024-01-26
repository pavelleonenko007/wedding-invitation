import AuthProvider from '@/components/AuthProvider';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Приглашение на свадьбу Эвелины и Павла',
	description: 'Ждём вас в ресторане «Палермо» (Торжественный зал) по адресу ул. Игуменка (Меридиан), 86; Советский район, Челябинск 06.04.2024 в 15:30',
};

export const viewport: Viewport = {
	themeColor: '#FCFCF8',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="w-full min-h-dvh">
			<body
				suppressHydrationWarning={true}
				className={inter.className + ' flex w-full min-h-dvh'}
			>
				<AuthProvider>
					{/* <Navbar /> */}
					<div className="w-full min-h-dvh flex flex-1">{children}</div>
				</AuthProvider>
			</body>
		</html>
	);
}

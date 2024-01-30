import AuthProvider from '@/components/AuthProvider';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Приглашение на свадьбу',
	description:
		'Свадьба Павла и Эвелины. 06.04.2024 в 15:30, ресторан «Палермо» (зал Торжеств), ул. Игуменка (Меридиан), 86; Советский район, Челябинск',
};

export const viewport: Viewport = {
	themeColor: '#FCFCF8',
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
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

'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from './ui/navigation-menu';

export default function Navbar() {
	const session = useSession();
	return (
		<div className="w-full py-2 sm:py-4">
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link href="/" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Главная
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					{session.data?.user && (
						<NavigationMenuItem>
							<Link href={'#'} legacyBehavior passHref>
								<NavigationMenuLink
									onClick={() => signOut()}
									className={navigationMenuTriggerStyle()}
								>
									Выйти
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					)}
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}

'use client';
import Ampersand from '@/components/Ampersand';
import CancelButton from '@/components/CancelButton';
import Container from '@/components/Container';
import Date from '@/components/Date';
import DrawingButton from '@/components/DrawingButton';
import Floral from '@/components/Floral';
import Invitation from '@/components/Invitation';
import Name from '@/components/Name';
import NamesSeparator from '@/components/NamesSeparator';
import WeddingWord from '@/components/WeddingWord';
import { useSearchParams } from 'next/navigation';

export default function Home() {
	const search = useSearchParams();
	const guestId = search.get('id') ?? null;

	const styles = `
		html {
			font-size: calc(100vw / 1600);
		}

		@media screen and (max-width: 992px) {
			html {
					font-size: calc(100vw / 668);
			}
		}

		@media screen and (max-width: 495px) {
			html {
					font-size: calc(100vw / 390);
			}
		}
	`;

	return (
		<>
			<style>{styles}</style>
			<main className="w-full min-h-[100dvh] flex justify-center items-center overflow-hidden">
				<div className="fixed top-0 right-0 left-0 bottom-0 z-[-1] bg-paper opacity-50"></div>
				<div className="absolute top-0 left-0"></div>
				<Container>
					<div
						className={`flex flex-col justify-center py-[32rem] ${
							guestId ? 'gap-[8rem]' : 'gap-[32rem]'
						} items-center w-full mx-auto sm:w-[400rem]`}
					>
						<div className="flex flex-col justify-center items-center relative">
							<Name name="Павел" />
							<div className="flex gap-[12rem] items-center">
								<NamesSeparator side="right" />
								<Ampersand />
								<NamesSeparator side="left" />
							</div>
							<Name name="Эвелина" />
							<Floral
								className="absolute top-0 left-0 -translate-x-[200%] translate-y-[200%] scale-x-[-1] sm:-translate-x-[300%] sm:translate-y-[100%]"
								variant="branch2"
								delayRatio={5}
							/>
							<Floral
								className="absolute top-0 left-4 -translate-y-[170%] rotate-180 sm:-translate-x-[500%] sm:-translate-y-[700%] sm:rotate-0"
								variant="flower3"
								delayRatio={6}
							/>
							<Floral
								className="w-[40rem] h-[40rem] absolute top-0 left-[50%] -translate-y-[400%]"
								variant="rose"
								delayRatio={7}
							/>
							<Floral
								className="absolute top-0 right-0 translate-x-[200%] sm:translate-x-[300%]"
								variant="branch2"
								delayRatio={4}
							/>
							<Floral
								className="absolute top-0 right-0 -translate-y-[250%] -scale-y-[1] sm:translate-x-[600%] sm:-translate-y-[700%]"
								variant="branch3"
								delayRatio={8}
							/>
							<Floral
								className="absolute top-0 right-0 hidden sm:translate-x-[1000%] sm:translate-y-[200%] sm:flex"
								variant="branch5"
								delayRatio={4}
							/>
							<Floral
								className="absolute bottom-0 left-0 -translate-x-[1100%] -translate-y-[400%] rotate-45"
								variant="branch"
								delayRatio={6}
							/>
						</div>
						<div className="flex flex-col items-center max-w-[228rem] text-[#947744] relative">
							<Invitation>
								приглашают вас на празднование по случаю своей
							</Invitation>
							<WeddingWord />
							<Floral
								className="w-[40rem] h-[40rem] absolute bottom-[10%] left-0 -translate-x-[150%] translate-y-[50%] sm:-translate-x-[400%]"
								variant="flower"
								delayRatio={6}
							/>
							<Floral
								className="absolute top-[30%] right-0 translate-x-[100%] scale-x-[-1] sm:translate-x-[200%]"
								variant="flower2"
								delayRatio={6}
							/>
							<Floral
								className="absolute top-0 left-0 hidden -rotate-90 sm:-translate-x-[1300%] sm:translate-y-[100%] sm:flex"
								variant="branch5"
								delayRatio={4}
							/>
						</div>
						<div className="relative w-full flex justify-center items-center gap-[8rem] font-baskerville uppercase">
							<Date />
							<Floral
								className="absolute top-0 right-0 translate-x-[200%] translate-y-[200%]"
								variant="branch4"
							/>
							<Floral
								className="absolute bottom-0 right-0 translate-y-[250%] scale-x-[-1] translate-x-[700%]"
								variant="branch3"
								delayRatio={8}
							/>
							<Floral
								className="absolute bottom-0 left-0 hidden -scale-y-[1] rotate-90 sm:flex sm:-translate-x-[700%] sm:translate-y-[400%]"
								variant="branch3"
								delayRatio={8}
							/>
						</div>
						{guestId && (
							<div className="w-full flex flex-col gap-[8rem]">
								<DrawingButton>Я приду</DrawingButton>
								<CancelButton>Я не приду</CancelButton>
							</div>
						)}
						<div className="relative max-w-[288rem] text-lg text-[#947744]">
							<Invitation>
								Ресторан «Палермо», ул. Игуменка, 86, Советский район, Челябинск
							</Invitation>
							<Floral
								className="absolute top-[30%] w-[28rem] h-[28rem] right-0 translate-x-[130%] rotate-180 sm:translate-x-[200%]"
								variant="rose"
								delayRatio={4}
							/>
							<Floral
								className="absolute top-[30%] left-0 -translate-x-[100%] translate-y-[50%] sm:-translate-x-[200%] sm:translate-y-[200%]"
								variant="flower2"
								delayRatio={5}
							/>
							<Floral
								className="absolute bottom-0 left-0 translate-x-[250%] translate-y-[200%] sm:-translate-x-[50%] sm:left-[50%]"
								variant="branch"
								delayRatio={6}
							/>
							<Floral
								className="absolute bottom-0 right-0 -translate-x-[50%] translate-y-[150%] sm:hidden"
								variant="branch4"
								delayRatio={8}
							/>
							<Floral
								className="absolute bottom-0 left-0 hidden translate-x-[250%] rotate-45 translate-y-[200%] sm:flex sm:translate-x-[300%] sm:left-auto sm:right-0 sm:translate-y-[400%]"
								variant="branch"
								delayRatio={6}
							/>
						</div>
					</div>
				</Container>
			</main>
		</>
	);
}

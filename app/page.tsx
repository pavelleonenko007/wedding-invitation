import Ampersand from '@/components/Ampersand';
import CancelButton from '@/components/CancelButton';
import Container from '@/components/Container';
import Date from '@/components/Date';
import DrawingButton from '@/components/DrawingButton';
import Invitation from '@/components/Invitation';
import Name from '@/components/Name';
import NamesSeparator from '@/components/NamesSeparator';
import WeddingWord from '@/components/WeddingWord';

export default function Home() {
	return (
		<main className="w-full h-[100dvh] flex justify-center items-center">
			<div className="fixed top-0 right-0 left-0 bottom-0 z-[-1] bg-paper opacity-50"></div>
			<div className="absolute top-0 left-0"></div>
			<Container>
				<div className="flex flex-col justify-center gap-2 items-center w-full mx-auto sm:w-[500px]">
					<div className="flex flex-col justify-center items-center">
						<Name name="Эвелина" />
						<div className="flex gap-3 items-center">
							<NamesSeparator side="right" />
							<Ampersand />
							<NamesSeparator side="left" />
						</div>
						<Name name="Павел" />
					</div>
					<div className="flex flex-col items-center max-w-[18rem] text-lg text-[#947744]">
						<Invitation>
							приглашают вас на празднование по случаю своей
						</Invitation>
						<WeddingWord />
					</div>
					<div className="w-full flex justify-center items-center gap-2 font-baskerville uppercase">
						<Date />
					</div>
					<div className="w-full flex flex-col gap-2">
						<DrawingButton>Я приду</DrawingButton>
						<CancelButton>Я не приду</CancelButton>
					</div>
					<div className="max-w-[18rem] text-lg text-[#947744]">
						<Invitation>
							Улица Игуменка (Меридиан), 86 Советский район, Челябинск, 454046
						</Invitation>
					</div>
					{/* <div className="flex items-center gap-2">
						<MDate />
					</div> */}
				</div>
			</Container>
		</main>
	);
}

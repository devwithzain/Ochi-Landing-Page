import { TextMarquee } from "@/animation";

export default function Marquee() {
	return (
		<>
			<div className="w-full bg-marquee rounded-t-[20px] py-[80rem] ">
				<TextMarquee baseVelocity="1">
					<h1 className="text-[480rem] font-FoundersGrotesk font-normal border-y border-gray-100 pb-[50px] uppercase text-white leading-[380rem] p-0 whitespace-nowrap tracking-[-5px]">
						we are ochi &nbsp;
					</h1>
					<h1 className="text-[480rem] font-FoundersGrotesk font-normal border-y border-gray-100 pb-[50px] uppercase text-white leading-[380rem] p-0 whitespace-nowrap tracking-[-5px]">
						we are ochi &nbsp;
					</h1>
				</TextMarquee>
			</div>
		</>
	);
}

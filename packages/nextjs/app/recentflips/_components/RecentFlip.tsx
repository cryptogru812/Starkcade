"use client";
import Image from "next/image";
import { MY_FLIPS } from "~~/app/assets/constants";
import { useRouter } from "next/navigation";

export default function RecentFlip() {
	const router = useRouter();
	const handleButtonClick = () => {
		router.back();
	};

	return (
		<div className="relative flex justify-center items-center min-h-screen overflow-hidden w-full p-8 sm:p-12">
			<div className="w-auto md:w-full md:max-w-[600px] col-span-12 md:col-span-6 h-auto bg-[#ece6f0] rounded-[28px] py-[24px] px-[16px] lg:px-[24px]">
				<h2 className="text-2xl mb-10 w-full text-gray-800">MY RECENT FLIPS</h2>
				<div className="space-y-1">
					{MY_FLIPS.map((flip, index) => (
						<div
							key={index}
							className={`flex items-center justify-between pb-1  ${index < 2 ? "border-b border-gray-400 " : ""}`}>
							<div className="flex items-center gap-4">
								<div className="relative w-12 h-[51px]">
									<Image
										alt={flip.imageAlt}
										src={flip.imageSrc}
										className="object-contain"
										fill
									/>
								</div>

								<p className="text-gray-800">
									<span className="font-bold">{flip.description.split(" ")[0]}</span> {flip.description.split(" ").slice(1).join(" ")}
								</p>
							</div>
							<p className="text-[#333] text-xs">{flip.time} minutes ago</p>
						</div>
					))}
				</div>
				<div className="mt-5 mb-5 ">
					<button
						className="w-full py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition"
						onClick={handleButtonClick}>
						GO BACK
					</button>
				</div>
			</div>
		</div>
	);
}

import data from "../data/home.json";

const Home = () => {
	return (
		<div className="relative flex flex-col gap-2 w-full">
			<h2 className="text-black/80 dark:text-white/80 font-bold mb-2">
				today
			</h2>
			<div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 dark:text-white/80 max-w-xl space-y-4">
				<p>{data.background} crafting best softwares.</p>
			</div>
		</div>
	);
};

export default Home;

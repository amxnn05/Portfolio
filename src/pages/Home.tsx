import data from "../data/home.json";

const Home = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <h2 className="text-black/80 dark:text-white/80 font-bold mb-2">today</h2>
            <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 dark:text-white/80 max-w-xl space-y-4">
                <p>
                    I'm Aman Bora. {data.background} Web Dev, AI, Neural Nets.
                </p>
                <p>
                    I am focused on building scalable, efficient, and user-centric web applications using modern technologies.
                </p>
            </div>
        </div>
    )
}

export default Home;
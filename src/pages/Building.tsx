const Building = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <h2 className="text-black/80 dark:text-white/80 font-bold mb-4">building</h2>
            
            <div className="flex flex-col gap-8 text-[13px] text-black/80 dark:text-white/80">
                <div className="flex flex-col gap-2">
                    <span className="font-semibold text-black/90 dark:text-white/90 underline underline-offset-4 decoration-black/20 dark:decoration-white/20 w-fit">Ai Router</span>
                    <p className="leading-relaxed">
                        Building a custom AI routing gateway that provides a unified interface to interact with multiple large language models through a single API.
                    </p>
                    <span className="text-[10px] text-black/50 dark:text-white/50 border border-black/10 dark:border-white/10 rounded-full px-2 py-0.5 w-fit mt-1">React, Express, Postgres, LLMs</span>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="font-semibold text-black/90 dark:text-white/90 underline underline-offset-4 decoration-black/20 dark:decoration-white/20 w-fit">Currently Learning</span>
                    <span className="text-[10px] text-black/50 dark:text-white/50 border border-black/10 dark:border-white/10 rounded-full px-2 py-0.5 w-fit mt-1">SQL, Tailwind CSS, AI</span>
                </div>
            </div>
        </div>
    );
};

export default Building;
import data from '../data/skill.json'

const About = () => {
    return (
        <div className="flex flex-col w-full">
            <h2 className="text-black/80 dark:text-white/80 font-bold mb-6">past & skills</h2>
            
            <div className="flex flex-col gap-4 text-[13px] text-black/70 dark:text-white/70">
                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="font-semibold text-black/90 dark:text-white/90">frontend</span>
                    <span>{data.frontend}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="font-semibold text-black/90 dark:text-white/90">backend</span>
                    <span>{data.backend}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="font-semibold text-black/90 dark:text-white/90">languages</span>
                    <span>{data.lang}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="font-semibold text-black/90 dark:text-white/90">database</span>
                    <span>{data.database}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="font-semibold text-black/90 dark:text-white/90">tools</span>
                    <span>{data.tools}</span>
                </div>
            </div>
        </div>
    )
}

export default About;
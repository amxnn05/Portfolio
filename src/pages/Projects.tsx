import data from "../data/projects.json";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Project = () => {
    const [expanded, setExpanded] = useState<number | null>(0); // First one expanded by default

    return (
        <div className="flex flex-col gap-4 w-full">
            <h2 className="text-black/80 dark:text-white/80 font-bold mb-6">personal projects</h2>
            <div className="flex flex-col gap-0 text-[13px] text-black/80 dark:text-white/80">
                {data.map((project, i) => {
                    const isExpanded = expanded === i;
                    return (
                    <div key={i} className="flex flex-col border-b border-black/5 dark:border-white/5 last:border-0 -mx-2 px-2 rounded-md transition-colors group">
                        <button 
                            onClick={() => setExpanded(isExpanded ? null : i)}
                            className={`flex justify-between items-center gap-4 py-3 w-full text-left ${!isExpanded && 'hover:bg-black/[0.02] dark:hover:bg-white/[0.02]'}`}
                        >
                            <span className="font-semibold text-black/90 dark:text-white/90 group-hover:underline underline-offset-4 decoration-black/20 dark:decoration-white/20">
                                {project.project_name}
                            </span>
                            <div className="flex gap-2 items-center text-[10px] text-black/50 dark:text-white/50 shrink-0">
                                <span className="border border-black/10 dark:border-white/10 rounded-full px-2 py-0.5 truncate max-w-[120px] md:max-w-[200px]">
                                    {project.teck_stack || project.sub}
                                </span>
                                <svg className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>
                        
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="pb-4 flex flex-col sm:flex-row gap-6 bg-black/[0.02] dark:bg-white/[0.02] p-4 rounded-lg mb-2 mt-2">
                                        {project.icon && (
                                            <div className="w-full sm:w-1/3 aspect-video shrink-0 rounded bg-black/5 dark:bg-white/5 overflow-hidden">
                                                <img src={project.icon} alt={project.project_name} className="w-full h-full object-cover" />
                                            </div>
                                        )}
                                        <div className="flex flex-col gap-4 w-full">
                                            <p className="leading-relaxed text-black/70 dark:text-white/70">
                                                {Array.isArray(project.project_desc) ? project.project_desc[0] : project.project_desc}
                                            </p>
                                            <div className="flex gap-4 text-[11px] font-medium text-black/60 dark:text-white/60 mt-auto pt-2">
                                                {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg> git</a>}
                                                {project.live && project.live !== project.github && <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg> live</a>}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )})}
            </div>
        </div>
    )
}

export default Project;
import data from "../data/projects.json";
import '../styles/projects.css';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "../components/layouts/ProjectCard"
const Project = () => {
    const containerRef = useRef(null);
    const ref = useRef(null);
    const { scrollYProgress: mainScroll } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });
    const ITEM_WIDTH = 300;
    const GAP = 30;
    const { scrollYProgress: projectScroll } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const x = useTransform(mainScroll, (latest) => {
        const w = window.innerWidth;
        const isMobile = w <= 600;
        const itemW = isMobile ? Math.min(ITEM_WIDTH, w - 40) : ITEM_WIDTH;
        const gap = isMobile ? 16 : GAP;
        const centerOffset = (w / 2) - (itemW / 2);
        const totalDistance = (data.length - 1) * (itemW + gap);
        return centerOffset + latest * (-totalDistance - centerOffset);
    });
    const opacity = useTransform(projectScroll, [0.1, 1], [1, 0]);
    return (
        <>
            <motion.section
                ref={ref}
                style={{ opacity }}
                className="intro-section">
                <motion.div
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1, }}
                    transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
                    className="heading" >

                    <motion.h1
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
                        className="impact"> PROJECTS</motion.h1>
                    <motion.p className="sub">Things I’ve built while learning, experimenting, and solving real problems.</motion.p>

                </motion.div>
            </motion.section >
            <motion.div

            >
                <div ref={containerRef} className="scroll-container">
                    <div className="sticky-wrapper">
                        <motion.div

                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}

                            className="gallery" style={{ x }}>
                            {data.map((project, i) => (

                                <ProjectCard key={i}
                                    title={project.project_name}
                                    desc={project.project_desc}
                                    sub={project.sub}
                                    stacks={project.teck_stack}
                                    icon={project.icon}
                                    github={project.github}
                                    live={project.live}
                                />

                            ))
                            }
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}


export default Project;
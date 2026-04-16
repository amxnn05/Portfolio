import data from "../data/projects.json";
import '../styles/projects.css';
import { Folder } from "lucide-react"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
    const centerOffset = (window.innerWidth / 2) - (ITEM_WIDTH / 2);
    const totalDistance = (data.length - 1) * (ITEM_WIDTH + GAP)
    const x = useTransform(mainScroll, [0, 1], [centerOffset, -totalDistance]);
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
                    <Folder color="white" size={53} />
                    <motion.h1
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
                        className="impact"> Projects</motion.h1>
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
                                <Card key={i} className="shrink-0 min-w-[400px] min-h-[500px] text-white bg bg-transparent ">
                                    <CardHeader>
                                        <CardTitle> {project.project_name} </CardTitle>
                                        <CardDescription> {project.project_desc} </CardDescription>
                                        <CardAction>Card Action</CardAction>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{project.teck_stack}</p>
                                    </CardContent>

                                </Card>


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
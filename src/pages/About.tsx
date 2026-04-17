import '../styles/about.css'
import data from '../data/skill.json'
import { motion } from "framer-motion";
const About = () => {
    return (
        <>
            <motion.div className='about'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            >
                <h1>About</h1>

                <p className='disc'>I am a Full Stack Developer focused on building scalable, efficient, and user-centric web applications using modern technologies</p>
                <p className='disc'>also i have a high interest in machine learning and AI stuffs.</p>
            </motion.div>
            <motion.div className='skills'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1, ease: "easeInOut" }}>
                <p className='disc'>Skill Sets I Bring Along</p>
                <p>
                    <span className="label">Frontend:</span>
                    <motion.span className="value"
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                    > {data.frontend}</motion.span>
                </p>

                <p>
                    <span className="label">Backend:</span>
                    <motion.span className="value"
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                    > {data.backend}</motion.span>
                </p>

                <p>
                    <span className="label">Programming Languages:</span>
                    <motion.span className="value"
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                    > {data.lang}</motion.span>
                </p>

                <p>
                    <span className="label">Database:</span>
                    <motion.span className="value"
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 1, ease: "easeInOut" }}> {data.database}</motion.span>
                </p>

                <p>
                    <span className="label">Tools & Platforms:</span>
                    <motion.span className="value"
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 1, ease: "easeInOut" }}> {data.tools}</motion.span>
                </p>
            </motion.div>


        </>


    )


}

export default About;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import data from "../data/home.json"
import "../styles/home.css"
const roles = ["Web Dev", "Ai", "Neural Nets", "Web 3"];
const Home = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [])
    return (
        <>
            <motion.div className="intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
            >

                <h1> {data.title} </h1>
                <h3>{data.background} {" "}
                    <span className="highlight">
                        <span className="slider" key={roles[index]}>
                            {roles[index]}
                        </span>
                    </span>
                </h3>
                <div className="icons">
                    <a href="https://github.com/amxnn05" className="hover:scale-110 transition" target="_blank" rel="noopener noreferrer">   {<FaGithub />} </a>
                    <a href="https://www.linkedin.com/in/amxnn05/" className="hover:scale-110 transition" target="_blank" rel="noopener noreferrer">  {<FaLinkedin />} </a>
                    <a href="mailto:amanbora9759345011@gmail.com" className="hover:scale-110 transition" target="_blank"> {<MdEmail />} </a>
                    <p>|</p>
                    <a href="/resume.pdf" className="hover:scale-105 transition" target="_blank">Resume</a>
                </div>


            </motion.div >



        </>
    )

}
export default Home;
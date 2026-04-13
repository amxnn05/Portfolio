import { useEffect, useState } from "react";
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
        <div className="intro">
            <h1> {data.title} </h1>
            <h3>{data.background} {" "}
                <span className="highlight">
                    <span className="slider" key={roles[index]}>
                        {roles[index]}
                    </span>
                </span>
            </h3>
        </div>
    )

}
export default Home;
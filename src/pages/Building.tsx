import { motion } from "framer-motion";
import '../styles/building.css'
const Now = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

            <motion.p
                className="head"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 2 }}
            >
                What I’m currently building and exploring.
            </motion.p>


            <motion.div
                className="w-full max-w-xl bg-transparent-900 rounded-xl p-6 text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                <h2 className="text-lg font-semibold mb-2 text-white">
                    Ai Router
                </h2>

                <p className="text-gray-400 text-sm mb-4">
                    Building a custom AI routing gateway that provides a unified interface to interact with multiple large language models through a single API.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                    <li>Using React.js, Express and postgress</li>
                    <li>Supports different llm models</li>
                    <li>Integrating a payment gateway to enable secure transactions</li>
                </ul>
            </motion.div>

            <motion.div
                className="w-full max-w-xl mt-6 bg-transparent-900 rounded-xl p-6 text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <h2 className="text-lg font-semibold mb-2 text-white">
                    Learning
                </h2>

                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                    <li>Sql Database</li>
                    <li>Tailwind CSS</li>
                    <li>Exposure to LLM</li>
                </ul>
            </motion.div>

        </section>
    );
};

export default Now;
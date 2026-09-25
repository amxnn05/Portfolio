import Home from "./pages/Home";
import Project from "./pages/Projects";
import Building from "./pages/Building";
import About from "./pages/About";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import MouseTrail from "./components/MouseTrail";

export default function App() {
	const [isDark, setIsDark] = useState(false);
	const [isCopied, setIsCopied] = useState(false);

	const handleCopyEmail = () => {
		navigator.clipboard.writeText("amxnn05@gmail.com");
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 2000);
	};

	useEffect(() => {
		const isSystemDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme === "dark" || (!storedTheme && isSystemDark)) {
			setIsDark(true);
			document.documentElement.classList.add("dark");
		} else {
			setIsDark(false);
			document.documentElement.classList.remove("dark");
		}
	}, []);

	const toggleTheme = () => {
		setIsDark(!isDark);
		if (!isDark) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	};

	return (
		<div className="min-h-screen w-full selection:bg-black/10 dark:selection:bg-white/10 flex justify-center relative pb-32">
			<MouseTrail />
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="w-full max-w-2xl flex flex-col relative px-6 md:px-8 pt-24 md:pt-32 text-[13px] md:text-[14px] leading-relaxed text-black/80 dark:text-white/80"
			>
				{/* Header Section */}
				<header className="flex justify-between items-start w-full relative">
					<div className="flex flex-col gap-4">
						<div className="flex flex-col gap-1">
							<span className="font-semibold text-3xl tracking-wide text-black/91 dark:text-white/90">
								Hii, I'm aman bora
							</span>
							<button
								onClick={handleCopyEmail}
								className="flex items-center gap-1.5 text-[13px] text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors cursor-pointer w-fit group"
								title="Copy email address"
							>
								amxnn05@gmail.com
								{isCopied ? (
									<motion.svg
										initial={{ scale: 0.5, opacity: 0 }}
										animate={{ scale: 1, opacity: 1 }}
										width="12"
										height="12"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2.5"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="opacity-70 group-hover:opacity-100 transition-opacity"
									>
										<polyline points="20 6 9 17 4 12"></polyline>
									</motion.svg>
								) : (
									<motion.svg
										initial={{ scale: 0.5, opacity: 0 }}
										animate={{ scale: 1, opacity: 1 }}
										width="12"
										height="12"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2.5"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="opacity-70 group-hover:opacity-100 transition-opacity"
									>
										<rect
											x="9"
											y="9"
											width="13"
											height="13"
											rx="2"
											ry="2"
										></rect>
										<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
									</motion.svg>
								)}
							</button>
						</div>
						<span className="text-black/70 dark:text-white/70 italic">
							i craft softwares.
						</span>
					</div>
					<button
						onClick={toggleTheme}
						className="flex flex-col items-end text-[10px] text-black/50 dark:text-white/50 tracking-widest uppercase gap-1 text-right hover:text-black dark:hover:text-white transition-colors cursor-pointer group mt-1"
					>
						<span className="group-hover:underline underline-offset-4 decoration-black/20 dark:decoration-white/20">
							{isDark ? "switch to light" : "switch to dark"}
						</span>
					</button>
				</header>

				<main className="flex flex-col gap-24 mt-8">
					<section id="home">
						<Home />
					</section>
					<section id="past">
						<About />
					</section>
					<section id="projects">
						<Project />
					</section>
					<section id="building">
						<Building />
					</section>
				</main>

				{/* Contact Footer */}
				<footer className="mt-16 pt-8 flex flex-col gap-4 pb-20">
					<h2 className="text-black/80 dark:text-white/80 font-bold">
						links
					</h2>
					<div className="flex flex-wrap gap-4 text-black/80 dark:text-white/80">
						<a
							href="https://github.com/amxnn05"
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-1.5 hover:text-black dark:hover:text-white underline underline-offset-4 decoration-black/20 dark:decoration-white/20 hover:decoration-black/40 dark:hover:decoration-white/40 transition-colors"
						>
							<svg
								width="12"
								height="12"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
							</svg>
							github
						</a>
						<a
							href="https://www.linkedin.com/in/amxnn05/"
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-1.5 hover:text-black dark:hover:text-white underline underline-offset-4 decoration-black/20 dark:decoration-white/20 hover:decoration-black/40 dark:hover:decoration-white/40 transition-colors"
						>
							<svg
								width="12"
								height="12"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
								<rect x="2" y="9" width="4" height="12"></rect>
								<circle cx="4" cy="4" r="2"></circle>
							</svg>
							linkedin
						</a>
						<a
							href="mailto:amxnn05@gmail.com"
							className="flex items-center gap-1.5 hover:text-black dark:hover:text-white underline underline-offset-4 decoration-black/20 dark:decoration-white/20 hover:decoration-black/40 dark:hover:decoration-white/40 transition-colors"
						>
							<svg
								width="12"
								height="12"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
								<polyline points="22,6 12,13 2,6"></polyline>
							</svg>
							email
						</a>
						<a
							href="/resume.pdf"
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-1.5 hover:text-black dark:hover:text-white underline underline-offset-4 decoration-black/20 dark:decoration-white/20 hover:decoration-black/40 dark:hover:decoration-white/40 transition-colors"
						>
							<svg
								width="12"
								height="12"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
								<polyline points="14 2 14 8 20 8"></polyline>
								<line x1="16" y1="13" x2="8" y2="13"></line>
								<line x1="16" y1="17" x2="8" y2="17"></line>
								<polyline points="10 9 9 9 8 9"></polyline>
							</svg>
							resume
						</a>
					</div>
				</footer>
			</motion.div>

			{/* Bottom Blur Fade Effect */}
			<div className="pointer-events-none fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fdf6e3] to-transparent dark:from-black z-50"></div>
		</div>
	);
}

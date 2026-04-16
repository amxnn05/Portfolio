import Navbar from "./components/layouts/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Project from "./pages/Projects"
import { useLocation } from "react-router-dom";

export default function App() {
	const Navitem = [
		{ name: "Aman", href: "/" },
		{ name: "Projects", href: "/projects" },
		{ name: "Proofs", href: "ProofofWork" },
		{ name: "About", href: "about" },
	]
	const location = useLocation();
	return (
		<>
			<Navbar items={Navitem} />
			<main>
				<Routes location={location} key={location.pathname} >
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Project />} />
				</Routes>
			</main>
		</>
	)
}


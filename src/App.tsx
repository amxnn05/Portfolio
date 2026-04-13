import Navbar from "./components/layouts/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
export default function App() {
	const Navitem = [
		{ name: "Aman", href: "/" },
		{ name: "Projects", href: "/projects" },
		{ name: "Proofs", href: "ProofofWork" },
		{ name: "About", href: "about" },
	]
	return (
		<>
			<Navbar items={Navitem} />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>

		</>
	)
}


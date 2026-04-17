import type { NavProps } from "../../types/nav";
import { Link } from "react-router-dom";
import "../../styles/nav.css"
const Navbar = ({ items }: NavProps) => {
	const [first, ...rest] = items;
	return (
		<nav className="nav" >
			<div className="nav-logo hover:scale-105 transition" >
				<Link to={first.href}> {first.name} </Link>
			</div>
			<div className="nav-left" >
				{rest.map((item, i) => (
					<Link className="hover:scale-105 transition" key={i} to={item.href}>
						{item.name}
					</Link>
				))}
			</div>
		</nav>
	);
}

export default Navbar;
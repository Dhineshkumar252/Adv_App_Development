import { FaReact } from "https://esm.sh/react-icons/fa";
import React from "react";
import './Navbar.scss';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Caru.css'
function AdminNav(){
    const [isActive, setIsActive] = React.useState(false);
	const [isDark, setDark] = React.useState(false);

	React.useEffect(() => {
		const prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)");

		const updateColorScheme = () => {
			if (prefersColorScheme.matches) {
				setDark(true);
			} else {
				setDark(false);
			}
		};

		prefersColorScheme.addEventListener("change", updateColorScheme);

		// Chame a função de atualização uma vez para definir o esquema de cores inicial
		updateColorScheme();

		// Remova o ouvinte quando o componente for desmontado
		return () => {
			prefersColorScheme.removeEventListener("change", updateColorScheme);
		};
	}, []);
  
	const toggleMenu = () => {
		setIsActive(!isActive);
	};

	const Dark = () => {
		setDark(!isDark);
	};
    return(
        

<nav className={`navbar ${isActive ? "actve" : ""}`}>
				<h1>
					BoatHousing <FaReact className="react" />
				</h1>

				<ul>
					<li></li>
					<li>
						<Link to='/AdminH'><a href="">DashBoard</a></Link>
					</li>
					<li>
						<Link to='/Management'><a href="">View Boats</a></Link>
					</li>
					<li>
						<Link to='/Post'><a href="">Add Boats</a></Link>
					</li>
					
					<li>
						<Link to='/AdminBook'><a href="">BookedBoats</a></Link>
					</li>
				</ul>
				<div className="kk">
				<Link to='/'><Button class="btn-success" color="red">Sign Out</Button></Link>

				</div>
				
	
<button
	onClick={Dark}
	className={`Button ${isDark ? "Dark" : ""}`}
></button>
				<div
					id="hamburger"
					onClick={toggleMenu}
					className={`Hamb ${isActive ? "actve" : ""}`}
				>
					<div className={`line1 ${isActive ? "actve" : ""}`}></div>
					<div className={`line2 ${isActive ? "actve" : ""}`}></div>
					<div className={`line3 ${isActive ? "actve" : ""}`}></div>
				</div>
			</nav>
        
    )
}
export default AdminNav;
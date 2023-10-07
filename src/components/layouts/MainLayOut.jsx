import "./MainLayOut.css";
import Switch from "react-switch";
import sun from "../../assets/svg/sun.svg";
import moon from "../../assets/svg/moon.svg";
import { Link } from "react-router-dom";

export function MainLayOut({ children, isChecked, setIsChecked }) {
	const handleChange = (checked) => {
		setIsChecked(checked);
		if (checked) {
			document.body.style.colorScheme = "light";
			document.body.style.color = "#000000";
			document.body.style.backgroundColor = "#edfffa";
		} else {
			document.body.style.colorScheme = "dark";
			document.body.style.color = "#ffffff";
			document.body.style.backgroundColor = "#242424";
		}
	};

	return (
		<>
			<header>
				<p>
					<Link to="/">
						<span>API</span> Rest Project
					</Link>
				</p>
				<div className="header-div">
					<label htmlFor="theme">Tema:</label>
					<Switch
						className="switch"
						id="theme"
						onChange={handleChange}
						checked={isChecked}
						checkedIcon={<img src={sun} className="switch-icon" />}
						uncheckedIcon={
							<img src={moon} className="switch-icon" />
						}
						onColor="#c4c4c4"
						offColor="#303030"
					></Switch>
				</div>
			</header>
			<section className="content">
				<aside>
					<ul>
						<li>
							<Link to="/">Inicio</Link>
						</li>
						<li>
							<Link to="/media">Media</Link>
						</li>
						<li>
							<Link to="/directors">Directores</Link>
						</li>
						<li>
							<Link to="/generos">Generos</Link>
						</li>
						<li>
							<Link to="/productores">Productores</Link>
						</li>
						<li>
							<Link to="/tipos">Tipos</Link>
						</li>
					</ul>
				</aside>
				<main>{children}</main>
			</section>
			<footer></footer>
		</>
	);
}

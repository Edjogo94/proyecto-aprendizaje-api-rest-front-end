import { useNavigate } from "react-router-dom";
import "./Welcome.css"; // Importa el archivo CSS para estilos
import { useEffect } from "react";

const Welcome = () => {
	const navigate = useNavigate();
	function handleClick() {
		navigate("/media");
	}

	useEffect(() => {
		document.title = "Inicio";
	}, []);
	return (
		<div className="welcome-container">
			<h1>Bienvenido a la Gestión de Tablas</h1>
			<p>Administra tus películas y multimedia de manera sencilla.</p>
			<button onClick={handleClick}>Ir a Media</button>
		</div>
	);
};

export default Welcome;

import { useEffect } from "react";
import image1 from "../assets/img/icons/error-404-alert.png";
import image2 from "../assets/img/icons/error-404-art.png";

const NotFound = () => {
	useEffect(() => {
		document.title = "Error";
	}, []);
	return (
		<div className="e404-container">
			<h2>Error 404: Página no encontrada</h2>
			<p>La página que estás buscando no existe.</p>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<img
					src={image1}
					alt="Imagen 1"
					style={{ marginRight: "10px", width: "200px" }}
				/>
				<img
					src={image2}
					alt="Imagen 2"
					style={{ marginLeft: "10px", width: "200px" }}
				/>
			</div>
		</div>
	);
};

export default NotFound;

import { useParams } from "react-router-dom";
import { AddEditForm } from "../../AddEditForm";

export function MediaEditPage({ isChecked }) {
	const { id } = useParams();
	const api = import.meta.env.VITE_API_URL;
	return (
		<>
			<AddEditForm
				title="Añadir un Media"
				isChecked={isChecked}
				apiUrl={api + "/media/" + id}
				postUrl={api + "/media/" + id}
				fields={[
					{
						label: "Título",
						name: "Titulo",
						apiname: "titulo",
						type: "text",
					},
					{
						label: "Sinopsis",
						name: "Sinopsis",
						apiname: "sinopsis",
						type: "textarea",
					},
					{
						label: "URL",
						name: "URL",
						apiname: "url",
						type: "text",
					},
					{
						label: "Imagen de Portada",
						name: "ImagenPortada",
						apiname: "imagenportada",
						type: "text",
					},
					{
						label: "Año de Estreno",
						name: "AnioEstreno",
						apiname: "anioestreno",
						type: "number",
					},
					{
						label: "Genero",
						name: "GeneroID",
						apiname: "generoid",
						type: "selector",
						link: api + "/generos",
					},
					{
						label: "Director",
						name: "DirectorID",
						apiname: "directorid",
						type: "selector",
						link: api + "/directors",
					},
					{
						label: "Productor",
						name: "ProductoraID",
						apiname: "productoraid",
						type: "selector",
						link: api + "/productores",
					},
					{
						label: "Tipo",
						name: "TipoID",
						apiname: "tipoid",
						type: "selector",
						link: api + "/tipos",
					},
				]}
				mode="edit"
				onSuccessLink="/media"
			></AddEditForm>
		</>
	);
}

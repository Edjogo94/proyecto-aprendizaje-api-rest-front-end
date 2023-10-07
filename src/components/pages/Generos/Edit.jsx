import { useParams } from "react-router-dom";
import { AddEditForm } from "../../AddEditForm";

export function GeneroEditPage({ isChecked }) {
	const { id } = useParams();
	const api = import.meta.env.VITE_API_URL;
	return (
		<>
			<AddEditForm
				title="Editar un Generos"
				isChecked={isChecked}
				apiUrl={api + "/generos/" + id}
				postUrl={api + "/generos/" + id}
				fields={[
					{
						label: "Nombre",
						name: "Nombre",
						apiname: "nombre",
						type: "text",
					},
					{
						label: "Estado",
						name: "Estado",
						apiname: "estado",
						type: "selector",
						options: [
							{
								label: "Activo",
								value: "Activo",
							},
							{
								label: "Inactivo",
								value: "Inactivo",
							},
						],
					},
					{
						label: "Descripcion",
						name: "Descripcion",
						apiname: "descripcion",
						type: "textarea",
					},
				]}
				mode="edit"
				onSuccessLink="/generos"
			></AddEditForm>
		</>
	);
}

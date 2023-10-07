import { useParams } from "react-router-dom";
import { AddEditForm } from "../../AddEditForm";

export function ProductoresEditPage({ isChecked }) {
	const { id } = useParams();
	const api = import.meta.env.VITE_API_URL;
	return (
		<>
			<AddEditForm
				title="Editar un Productores"
				isChecked={isChecked}
				apiUrl={api + "/productores/" + id}
				postUrl={api + "/productores/" + id}
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
						label: "Slogan",
						name: "Slogan",
						apiname: "slogan",
						type: "text",
					},
					{
						label: "Descripcion",
						name: "Descripcion",
						apiname: "descripcion",
						type: "textarea",
					},
				]}
				mode="edit"
				onSuccessLink="/productores"
			></AddEditForm>
		</>
	);
}

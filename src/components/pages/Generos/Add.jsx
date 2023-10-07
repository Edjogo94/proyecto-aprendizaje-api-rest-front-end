import { AddEditForm } from "../../AddEditForm";
export function GeneroAddPage({ isChecked }) {
	const api = import.meta.env.VITE_API_URL;
	return (
		<>
			<AddEditForm
				title="Añadir un Generos"
				isChecked={isChecked}
				apiUrl={api + "/generos/"}
				postUrl={api + "/generos/"}
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
				mode="add"
				onSuccessLink="/generos"
			></AddEditForm>
		</>
	);
}



import { AddEditForm } from "../../AddEditForm";
export function ProductoresAddPage({ isChecked }) {
	const api = import.meta.env.VITE_API_URL;
	return (
		<>
			<AddEditForm
				title="Añadir un Productores"
				isChecked={isChecked}
				apiUrl={api + "/productores/"}
				postUrl={api + "/productores/"}
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
				mode="add"
				onSuccessLink="/productores"
			></AddEditForm>
		</>
	);
}

import { AddEditForm } from "../../AddEditForm";
export function DirectorAddPage({ isChecked }) {
	const api = import.meta.env.VITE_API_URL;
	return (
		<>
			<AddEditForm
				title="Añadir un Director"
				isChecked={isChecked}
				apiUrl={api + "/directors/"}
				postUrl={api + "/directors/"}
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
				]}
				mode="add"
				onSuccessLink="/directors"
			></AddEditForm>
		</>
	);
}

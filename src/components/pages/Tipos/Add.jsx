import { AddEditForm } from "../../AddEditForm";
export function TiposAddPage({ isChecked }) {
	const api = import.meta.env.VITE_API_URL;
	return (
		<>
			<AddEditForm
				title="Añadir un Tipo"
				isChecked={isChecked}
				apiUrl={api + "/tipos/"}
				postUrl={api + "/tipos/"}
				fields={[
					{
						label: "Nombre",
						name: "Nombre",
						apiname: "nombre",
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
				onSuccessLink="/tipos"
			></AddEditForm>
		</>
	);
}

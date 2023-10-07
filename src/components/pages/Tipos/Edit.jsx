import { useParams } from "react-router-dom";
import { AddEditForm } from "../../AddEditForm";

export function TiposEditPage({ isChecked }) {
	const { id } = useParams();
	const api = import.meta.env.VITE_API_URL;
	return (
		<>
			<AddEditForm
				title="Editar un Tipo"
				isChecked={isChecked}
				apiUrl={api + "/tipos/" + id}
				postUrl={api + "/tipos/" + id}
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
				mode="edit"
				onSuccessLink="/tipos"
			></AddEditForm>
		</>
	);
}

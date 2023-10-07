import { useParams } from "react-router-dom";
import { AddEditForm } from "../../AddEditForm";

export function DirectorEditPage({ isChecked }) {
	const { id } = useParams();
	const api = import.meta.env.VITE_API_URL;
	return (
		<>
			<AddEditForm
				title="Editar un Director"
				isChecked={isChecked}
				apiUrl={api + "/directors/" + id}
				postUrl={api + "/directors/" + id}
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
				mode="edit"
				onSuccessLink="/directors"
			></AddEditForm>
		</>
	);
}

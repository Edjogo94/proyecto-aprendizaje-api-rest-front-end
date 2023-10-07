import { Table } from "../../Table";

export function DirectorShowPage() {
	const api = import.meta.env.VITE_API_URL;
	return (
		<>
			<Table
				AddLink="/directors/add"
				title="Tabla de recursos para Directores"
				dataLink={api + "/directors"}
				deleteApiLink={api + "/directors/"}
				editLink="/directors/edit/"
				headers={[
					"ID",
					"Nombre",
					"Estado",
					"Fecha de creacion",
					"Fecha actualizacion",
				]}
				columnFormats={["", "", "", "Fecha", "Fecha"]}
			></Table>
		</>
	);
}

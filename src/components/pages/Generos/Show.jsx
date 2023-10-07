import { Table } from "../../Table";

export function GeneroShowPage() {
	const api = import.meta.env.VITE_API_URL;
	return (
		<>
			<Table
				AddLink="/generos/add"
				title="Tabla de recursos para Generos"
				dataLink={api + "/generos"}
				deleteApiLink={api + "/generos/"}
				editLink="/generos/edit/"
				headers={[
					"ID",
					"Nombre",
					"Estado",
					"Fecha de creacion",
					"Fecha actualizacion",
					"Descripcion",
				]}
				columnFormats={["", "", "", "Fecha", "Fecha", ""]}
			></Table>
		</>
	);
}

import { Table } from "../../Table";

export function ProductoresShowPage() {
	const api = import.meta.env.VITE_API_URL;
	return (
		<>
			<Table
				AddLink="/productores/add"
				title="Tabla de recursos para Productores"
				dataLink={api + "/productores"}
				deleteApiLink={api + "/productores/"}
				editLink="/productores/edit/"
				headers={[
					"ID",
					"Nombre",
					"Estado",
					"Fecha de creacion",
					"Fecha actualizacion",
					"Slogan",
					"Descripcion",
				]}
				columnFormats={["", "", "", "Fecha", "Fecha", "", ""]}
			></Table>
		</>
	);
}

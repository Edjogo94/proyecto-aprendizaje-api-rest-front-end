
import { Table } from "../../Table";

export function TiposShowPage() {
	const api = import.meta.env.VITE_API_URL;
	return (
		<>
			<Table
				AddLink="/tipos/add"
				title="Tabla de recursos para Tipo"
				dataLink={api + "/tipos"}
				deleteApiLink={api + "/tipos/"}
				editLink="/tipos/edit/"
				headers={[
					"ID",
					"Nombre",
					"Fecha de creacion",
					"Fecha actualizacion",
					"Descripcion",
				]}
				columnFormats={["", "", "Fecha", "Fecha", ""]}
			></Table>
		</>
	);
}

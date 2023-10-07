import { Table } from "../../Table";

export function MediaShowPage() {
	const api = import.meta.env.VITE_API_URL;
	return (
		<>
			<Table
				AddLink="/media/add"
				title="Tabla de recursos para Media"
				dataLink={api + "/media"}
				deleteApiLink={api + "/media/"}
				editLink="/media/edit/"
				headers={[
					"ID",
					"Titulo",
					"Sinopsis",
					"URL",
					"Imagen",
					"Fecha de creacion",
					"Fecha actualizacion",
					"Año estreno",
					"Genero",
					"Director",
					"Productora",
					"Tipo",
				]}
				columnFormats={[
					"",
					"",
					"",
					"",
					"Imagen",
					"Fecha",
					"Fecha",
					"",
					"",
					"",
					"",
					"",
				]}
			></Table>
		</>
	);
}

import "./Table.css";
import editIcon from "../assets/svg/edit-icon.svg";
import deleteIcon from "../assets/svg/delete-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalQuestion from "./modals/SimpleModalQuestion";
import axios from "axios";
import defaultImage from "../assets/img/sin_foto.png";
import { formatearFecha } from "../Utils/Functions";

export function Table({
	title,
	headers,
	dataLink,
	editLink,
	deleteApiLink,
	AddLink,
	columnFormats,
}) {
	const [decidiendo, setDecidiendo] = useState(undefined);
	const [data, setTableData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		document.title = title;
	}, []);

	useEffect(() => {
		axios
			.get(dataLink)
			.then((response) => {
				setTableData(response.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error:", error);
				setLoading(false);
			});
	}, [dataLink]);

	function handleDelete() {
		axios
			.delete(deleteApiLink + decidiendo)
			.then(() => {
				setTableData((prevData) =>
					prevData.filter((item) => item.id !== decidiendo)
				);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
		setDecidiendo(undefined);
	}

	const navigate = useNavigate();
	function handleClick() {
		navigate(AddLink);
	}
	return (
		<>
			{loading ? (
				<span className="loader"></span>
			) : (
				<>
					<h1>{title}</h1>
					<div className="table-btns">
						<button onClick={handleClick}>
							<img src="" alt="" />
							Añadir
						</button>
					</div>
					<table>
						<thead>
							<tr>
								{headers.map((header) => {
									return <th key={header}>{header}</th>;
								})}
								<th>Acciones</th>
							</tr>
						</thead>
						<tbody>
							{data.map((x, i) => {
								return (
									<tr key={x.id}>
										{Object.values(x).map((x_d, index) => {
											const columnFormat =
												columnFormats[index];
											let formattedValue = x_d;
											if (columnFormat === "Fecha") {
												formattedValue = formatearFecha(
													x_d
												);
											} else if (
												columnFormat === "Imagen"
											) {
												if (x_d) {
													formattedValue = (
														<img
															src={x_d}
															alt=""
															width="30"
															height="30"
														/>
													);
												} else {
													formattedValue = (
														<img
															src={defaultImage}
															alt=""
															width="30"
															height="30"
														/>
													);
												}
											}

											return (
												<td key={`${x.id}-${index}`}>
													{formattedValue}
												</td>
											);
										})}
										<td className="actions">
											<Link
												to={editLink + x.id}
												className="edit"
											>
												<img src={editIcon} alt="" />
											</Link>
											<a
												className="delete"
												onClick={() => {
													setDecidiendo(x.id);
												}}
											>
												<img src={deleteIcon} alt="" />
											</a>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</>
			)}
			<ModalQuestion
				acceptText={"Eliminar"}
				isOpen={decidiendo !== undefined}
				message={"¿Estás seguro/a de que quieres eliminar el elemento?"}
				onAccept={handleDelete}
				onReject={() => {
					setDecidiendo(undefined);
				}}
				rejectText={"Cancelar"}
				title={"Eliminar"}
			></ModalQuestion>
		</>
	);
}

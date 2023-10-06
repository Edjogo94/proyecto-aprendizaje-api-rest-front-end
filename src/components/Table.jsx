import "./Table.css";
import editIcon from "../assets/svg/edit-icon.svg";
import deleteIcon from "../assets/svg/delete-icon.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalQuestion from "./modals/SimpleModalQuestion";
import axios from "axios";

export function Table({ headers, dataLink, editLink, deleteApiLink }) {
	const [decidiendo, setdecidiendo] = useState(undefined);
	const [data, settabledata] = useState([]);

	useEffect(() => {
		axios
			.get(dataLink)
			.then((response) => {
				settabledata(response.data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}, [data]);

	function handleDelete() {
		axios
			.delete(deleteApiLink + decidiendo)
			.then(() => {
				handleEditClick(decidiendo);
				settabledata(undefined);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
		setdecidiendo(undefined);
	}
	return (
		<>
			<table>
				<thead>
					<tr>
						{headers.map((header) => {
							return <th id={header}>{header}</th>;
						})}
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{data.map((x) => {
						return (
							<tr id={x.id}>
								{x.map((x_d) => {
									return <td id={x.id}>{x_d}</td>;
								})}
								<td className="actions">
									<Link to={editLink + "/" + x.id}>
										<img src={editIcon} alt="" />
									</Link>
									<button
										onClick={() => {
											setdecidiendo(x.id);
										}}
									>
										<img src={deleteIcon} alt="" />
									</button>
								</td>
								;
							</tr>
						);
					})}
				</tbody>
			</table>
			<ModalQuestion
				acceptText={"Eliminar"}
				isOpen={decidiendo !== undefined}
				message={"Estas seguro/a de que quieres eliminar el elemento?"}
				onAccept={handleDelete}
				onReject={() => {
					setdecidiendo(undefined);
				}}
				rejectText={"Cancelar"}
				title={"Eliminar"}
			></ModalQuestion>
		</>
	);
}

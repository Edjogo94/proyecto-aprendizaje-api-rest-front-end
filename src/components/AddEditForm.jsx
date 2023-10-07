import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./modals/SimpleModal";
import Select from "react-select";
import "./AddEditForm.css";
import { useNavigate } from "react-router-dom";

export function AddEditForm({
	title,
	mode,
	apiUrl,
	postUrl,
	fields,
	isChecked,
	onSuccessLink,
}) {
	const [formData, setFormData] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [loading, setLoading] = useState(true);
	const [decidiendo, setDecidiendo] = useState(undefined);
	const [options, setoptions] = useState({});
	const [error, seterror] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		document.title = title;
	}, []);
	useEffect(() => {
		let selectors = fields.filter((field) => field.type === "selector");
		let loadedCount = 0;
		selectors.forEach((element) => {
			if (element.link) {
				axios
					.get(element.link)
					.then((response) => {
						const renamedData = response.data.map((item) => ({
							label: item.nombre,
							value: item.id,
						}));
						setoptions((prevOptions) => ({
							...prevOptions,
							[element.name]: renamedData,
						}));
						loadedCount++;
						if (loadedCount === selectors.length) {
							setLoading(false);
						}
					})
					.catch((error) => {
						seterror(
							"Error:" + error.response.data.error
								? error.response.data.error
								: error.response.data.message
						);
						setLoading(false);
					});
			} else {
				setoptions({
					...options,
					[element.name]: element.options,
				});
				setLoading(false);
			}
		});

		if (mode === "edit") {
			// Si estamos en modo de edición, obtener los datos del elemento desde la API
			axios
				.get(apiUrl)
				.then((response) => {
					const renamedData = {};
					for (let index = 0; index < fields.length; index++) {
						renamedData[fields[index].name] =
							response.data[fields[index].apiname];
					}
					setFormData(renamedData);
					setLoading(false);
				})
				.catch((error) => {
					seterror(
						"Error:" + error.response.data.error
							? error.response.data.error
							: error.response.data.message
					);
					setLoading(false);
				});
		} else {
			setLoading(false);
		}
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		if (mode === "edit") {
			axios
				.put(postUrl, formData)
				.then(() => {
					setIsSubmitting(false);
					setDecidiendo(true);
				})
				.catch((error) => {
					setIsSubmitting(false);
					seterror(
						"Error:" + error.response.data.error
							? error.response.data.error
							: error.response.data.message
					);
				});
		} else {
			axios
				.post(postUrl, formData)
				.then(() => {
					setIsSubmitting(false);
					setDecidiendo(true);
				})
				.catch((error) => {
					setIsSubmitting(false);
					seterror(
						"Error:" + error.response.data.error
							? error.response.data.error
							: error.response.data.message
					);
				});
		}
	};

	return (
		<>
			{loading ? (
				<span className="loader"></span>
			) : (
				<>
					<form onSubmit={handleSubmit}>
						<h1>{title}</h1>
						<p className="error">{error}</p>
						{fields.map((field) => (
							<div key={field.name}>
								<label htmlFor={field.name}>
									{field.label}
								</label>
								{field.type === "textarea" ? (
									<textarea
										className={`form-input ${
											isChecked ? "" : "form-input-dark"
										}`}
										id={field.name}
										name={field.name}
										value={formData[field.name] || ""}
										onChange={handleChange}
									/>
								) : (
									<>
										{field.type === "selector" ? (
											<Select
												className="select"
												options={options[field.name]}
												onChange={(selectedOption) =>
													handleChange({
														target: {
															name: field.name,
															value:
																selectedOption.value,
														},
													})
												}
												isSearchable={true}
												styles={{
													control: (provided) => ({
														...provided,
														backgroundColor: isChecked
															? "#ffffff"
															: "#242424",
													}),
													singleValue: (
														provided
													) => ({
														...provided,
														color: isChecked
															? "#242424"
															: "#ffffff",
													}),
													option: (
														provided,
														state
													) => ({
														...provided,
														backgroundColor: isChecked
															? state.isSelected
																? "#242424"
																: "#ffffff"
															: state.isSelected
															? "#ffffff"
															: "#242424",
														color: isChecked
															? state.isSelected
																? "#ffffff"
																: "#242424"
															: state.isSelected
															? "#242424"
															: "#ffffff",
													}),
												}}
												theme={(theme) => ({
													...theme,
													borderRadius: 10,
												})}
												placeholder="Selecciona una opción"
											/>
										) : (
											<input
												type={field.type}
												id={field.name}
												name={field.name}
												value={
													formData[field.name] || ""
												}
												onChange={handleChange}
												required
												className={`form-input ${
													isChecked
														? ""
														: "form-input-dark"
												}`}
											/>
										)}
									</>
								)}
							</div>
						))}

						<div className="action-btns">
							<button type="submit" disabled={isSubmitting}>
								{mode === "edit"
									? "Guardar cambios"
									: "Agregar"}
							</button>
							<button
								onClick={() => {
									navigate(onSuccessLink);
								}}
							>
								Atras
							</button>
						</div>
					</form>
					<Modal
						isOpen={decidiendo != undefined}
						message="Elemento agregado."
						onClose={() => {
							setDecidiendo(false);
							navigate(onSuccessLink);
						}}
						title="Exito"
					></Modal>
				</>
			)}
		</>
	);
}

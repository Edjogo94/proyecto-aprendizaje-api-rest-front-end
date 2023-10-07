export function formatearFecha(fechaString) {
	const fecha = new Date(fechaString);
	const dia = fecha.getDate().toString().padStart(2, "0");
	const mes = (fecha.getMonth() + 1).toString().padStart(2, "0"); // Sumar 1 al mes porque en JavaScript los meses comienzan desde 0 (enero).
	const anio = fecha.getFullYear();
	const horas = fecha.getHours().toString().padStart(2, "0");
	const minutos = fecha.getMinutes().toString().padStart(2, "0");
	const segundos = fecha.getSeconds().toString().padStart(2, "0");

	return `${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}`;
}

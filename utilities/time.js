export function humaneDate(date) {
	return new Date(date).toLocaleDateString("en-Gb", {
		weekday: "short",
		year: "numeric",
		month: "short",
		day: "numeric",
	});
}

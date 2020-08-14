import dayjs from "dayjs";
import "dayjs/locale/fr";
import "dayjs/locale/en";

const lang = "en";

dayjs.locale(lang);

export const prettyPrintDate = (date) =>
	date ? dayjs(date).format("MMMM YYYY") : "Now";

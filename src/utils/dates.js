import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/fr";
import "dayjs/locale/en";

const lang = "en";

dayjs.locale(lang);
dayjs.extend(customParseFormat);

export const parseDateFromData = (date) => dayjs(date, "DD/MM/YYYY");

export const prettyPrintDate = (date) =>
	date ? parseDateFromData(date).format("MMMM YYYY") : "Now";

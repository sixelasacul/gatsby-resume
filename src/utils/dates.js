import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/fr";
import "dayjs/locale/en";

const lang = "en";

dayjs.locale(lang);
dayjs.extend(customParseFormat);

/**
 * If empty string is givent for date, use `undefined` keyword to return the
 * default constructor and get the current date.
 * https://day.js.org/docs/en/parse/now
 */
export const parseDateFromData = (date) =>
	dayjs(date || undefined, date && "DD/MM/YYYY");

export const prettyPrintDate = (date) =>
	date ? parseDateFromData(date).format("MMMM YYYY") : "Now";

const pluralSingularOrEmpty = (span, singularWord) => {
	if (span === 0) {
		return "";
	}
	return `${span} ${singularWord}${span > 1 ? "s" : ""}`;
};

export const prettyPrintTimespan = (startDate, endDate) => {
	const parsedStartDate = parseDateFromData(startDate);
	const parsedEndDate = parseDateFromData(endDate);

	const yearSpan = parsedEndDate.diff(parsedStartDate, "year");
	const monthSpan =
		parsedEndDate.diff(parsedStartDate, "month") - 12 * yearSpan;

	return `${pluralSingularOrEmpty(yearSpan, "year")} ${pluralSingularOrEmpty(
		monthSpan,
		"month"
	)}`.trim();
};

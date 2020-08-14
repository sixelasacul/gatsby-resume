import dayjs from "dayjs";

import { parseDateFromData } from "./dates";

export const sortByOrderNumber = (first, second) => first.order - second.order;

export const sortByStartDate = (first, second) =>
	parseDateFromData(second.startDate) - parseDateFromData(first.startDate);

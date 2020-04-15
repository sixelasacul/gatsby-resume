import dayjs from "dayjs";

export const sortByOrderNumber = (first, second) => first.order - second.order

export const sortByStartDate = (first, second) => dayjs(second.startDate) - dayjs(first.startDate);
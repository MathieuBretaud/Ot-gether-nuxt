import dayjs from "dayjs";

export const formatDate = (eventDate: any) => {
    return dayjs(eventDate).format("DD/MM/YYYY");
};
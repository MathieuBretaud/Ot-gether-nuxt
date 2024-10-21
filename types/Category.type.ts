import type {EventType} from "~/types/Event.type";

export type CategoryType = {
    id: number;
    name: string;
}

export type CategoriesResponse = {
    data: CategoryType[];
};

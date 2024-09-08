export type Event = {
    id: number;
    title: string;
    description: string;
    participant_max: number;
    participants_count: number;
    category: string;
    image_url: string;
    start_date: string;
}

type Meta = {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
};

export type EventResponse = {
    data: Event[];
    meta: Meta;
};
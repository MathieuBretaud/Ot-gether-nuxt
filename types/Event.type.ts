export type EventType = {
    id: number;
    title: string;
    slug: string;
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
    data: EventType;
};

export type EventsResponse = {
    data: EventType[];
    meta: Meta;
};

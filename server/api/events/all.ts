export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const {page, search, category} = getQuery(event);
    return await $fetch('http://127.0.0.1:8000/api/events', {
        params: {
            page,
            search,
            category
        }
    })
})

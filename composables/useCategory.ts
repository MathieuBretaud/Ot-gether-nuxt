import {onMounted, ref} from "vue";

export const useCategoryList = () => {

    const categories = ref<any>([]);
    try {
        const {data, status, error, refresh, clear} = useFetch<any>('/api/categories/all', {
            method: 'GET',
        });
        if (data.value) {
            categories.value = data.value.data;
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des statuts :', error);
    }

    return {
        categories
    };
}


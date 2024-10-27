import type {CategoriesResponse, CategoryType} from "~/types/Category.type";

export const useCategoryList = () => {
    const categories = useState<CategoryType[]>('categories', () => []);

    const fetchCategories = async () => {
        try {
            const {data, status} = await useFetch<CategoriesResponse>('/api/categories/all', {
                method: 'GET',
            });
            if (data.value) {
                categories.value = data.value.data;
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des catégories :', error);
        }
    };

    fetchCategories()

    return {
        categories
    };
};

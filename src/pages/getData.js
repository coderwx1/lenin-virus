import {
    getNews
} from "@/api";
import {
    ref,
    computed
} from "vue";


export function getData(id) {
    console.log(id);
    let newsData = ref([]);
    async function getNewsData() {
        try {
            const data = await getNews()
            newsData.value = data.news
            // alert(data)
        } catch (error) {
            console.log(error);
        }
    }
    getNewsData()
    const filterNewsDataById = computed(() => newsData.value.filter((item) => item.id == id.value));
    return {
        newsData,
        filterNewsDataById
    }

}
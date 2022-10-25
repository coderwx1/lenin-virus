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

    (async () => {
        try {
            const data = await getNews()
            newsData.value = data.news
        } catch (error) {
            alert("加载错误，请刷新重试" + error.message)
        }
    })();
    const filterNewsDataById = computed(() => newsData.value.filter((item) => item.id == id.value));
    return {
        newsData,
        filterNewsDataById
    }

}
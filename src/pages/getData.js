import { getNews, getAllNews } from "@/api";
import { ref, computed } from "vue";

export function getPageData() {
  let newsData = ref([]);
  let errStatus = ref(null);
  (async () => {
    try {
      const data = await getNews();
      newsData.value = data.news;
    } catch (error) {
      errStatus.value = true;
    }
  })();

  return {
    newsData,
    errStatus,
  };
}

export function getAllData(id) {
  let newsData = ref([]);
  let errStatus = ref(null);
  (async () => {
    try {
      const data = await getAllNews();
      newsData.value = data.news;
    } catch (error) {
      errStatus.value = true;
    }
  })();
  const filterNewsDataById = computed(() => newsData.value.filter((item) => item.id == id.value));
  return {
    errStatus,
    filterNewsDataById,
  };
}

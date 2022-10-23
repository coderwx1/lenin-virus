<template>
  <div class="news-info">
    <main>
      <template v-for="item in filterNewsDataById" :key="item.id">
        <header>
          <h1 class="article-title">
            {{ item.title }}
          </h1>
          <section class="article-info">
            <div class="article-source">
              <div class="author">
                <span>{{ item.source }}</span>
              </div>
              <div class="uptate-time">
                <span>最后更新时间:{{ item.lastUpdateTime }}</span>
              </div>
            </div>
          </section>
        </header>

        <div class="article-content">
          <ul>
            <li v-for="userObj in item.content" :key="userObj.imgUrls[0]">
              <img v-lazy="imgUrl" v-for="(imgUrl, i) in userObj.imgUrls" :key="i" />
            </li>
          </ul>
        </div>
      </template>
    </main>
  </div>
</template>

<script setup>
import { getNews } from "@/api";
import { ref, computed, onActivated } from "vue";
// import { useRoute } from "vue-router";
// const route = useRoute();
const newsList = ref([]);
// const id = route.params.id;
let id;
onActivated(() => {
  id = window.localStorage.getItem("id");
  getNews().then(
    (val) => (newsList.value = val.news),
    (err) => console.log(err)
  );
});
const filterNewsDataById = computed(() => newsList.value.filter((item) => item.id == id));
// 当参数更改时获取用户信息
</script>

<style lang="less" scoped>
.news-info {
  width: 100%;
  main {
    padding: 0 20px;
    header {
      h1 {
        font-weight: 500;
        line-height: 34px;
        padding: 20px 0;
      }
      section {
        .article-source {
          margin-bottom: 10px;
          display: grid;
          row-gap: 5px;
          .author {
            span {
              font-size: 13px;
            }
          }

          .uptate-time {
            span {
              color: #b4b4b4;
            }
          }
        }
      }
    }

    .article-content {
      ul {
        li {
          list-style: none;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>

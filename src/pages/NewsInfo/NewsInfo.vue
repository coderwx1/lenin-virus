<template>
  <div class="news-info">
    <main v-if="filterNewsDataById.length">
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
              <lazy-component>
                <template v-for="imgUrl in userObj.imgUrls" :key="imgUrl">
                  <img v-lazy="imgUrl" />
                </template>
              </lazy-component>
            </li>
          </ul>
        </div>
      </template>
    </main>
    <!-- 因为添加了路由过渡，当访问该路由，页面数据没有请求回来时，会给人一种感觉路由过渡没有生效 加个loding可以看到路由过渡 -->
    <div class="loading" style="width: 100%; height: 100vh" v-else>
      <van-loading type="spinner" vertical>加载中...</van-loading>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getData } from "../getData";
import { useRoute } from "vue-router";

const route = useRoute();
let id = ref(route.params.id);
let { filterNewsDataById } = getData(id);
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
          img[lazy="loading"] {
            background: url(./loading.jpg);
            background-size: 100%;
            background-position: center;
          }

          img[lazy="loaded"] {
            animation-duration: 1s;
            animation-fill-mode: both;
            animation-name: fadeIn;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        }
      }
    }

    // @keyframes enterAnimate {
    //   from {
    //     transform: translateX(100%);
    //   }
    //   to {
    //     transform: translateX(0);
    //   }
    // }
  }

  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

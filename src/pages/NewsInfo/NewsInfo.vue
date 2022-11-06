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

    <div class="loading" v-if="!filterNewsDataById.length && !errStatus">
      <van-loading type="spinner" vertical>加载中...</van-loading>
    </div>

    <div class="err-box" v-if="errStatus">
      <van-empty image="error" description="请求失败，请刷新网页重试！" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAllData } from "../getData";
import { useRoute } from "vue-router";

const route = useRoute();
let id = ref(route.params.id);
let { filterNewsDataById, errStatus } = getAllData(id);
</script>

<style lang="less" scoped>
.news-info {
  width: 100%;
  main {
    padding: 0 20px 10px 20px;

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
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .err-box {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
</style>

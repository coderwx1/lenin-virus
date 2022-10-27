<template>
  <div class="news-info">
    <div v-if="0"></div>
    <!-- 如果添加了路由过渡，当访问该路由，页面数据没有请求回来时，会给人一种感觉路由过渡没有生效 加个loding可以看到路由过渡 -->
    <div class="loading" v-else>
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
}
</style>

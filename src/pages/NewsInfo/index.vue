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
    <div class="loading" style="width: 100%; height: 100vh" v-else>
      <van-loading type="spinner" color="#1989fa" vertical>加载中...</van-loading>
    </div>
  </div>
</template>

<script setup>
import { ref, onActivated } from "vue";
import { getData } from "../getData";

/*
如果需要根据路由参数来动态获取数据，但是当该路由组件又是缓冲组件时，那么路由参数只有初始访问路由时可以获取到,想要随时获取，可以把 useRoute()放在onActivated函数中。
还有一种方式是把路由参数保存在本地存储，跳转路由后读取出来，然后通过传递响应式ref来连接响应性
 */
let id = ref(0);
let { filterNewsDataById } = getData(id);

onActivated(() => {
  id.value = window.localStorage.getItem("id");
  // alert(window.localStorage.getItem("id"))
});
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
  }

  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

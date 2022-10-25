<template>
  <div class="home" ref="homeNodeRef">
    <div class="home-content">
      <header>
        <img src="../../assets/header-bg.png" alt="" />
        <h1 class="title">始终坚持一切为了人民</h1>
        <p>——习近平</p>
      </header>
      <div class="clear-fix"></div>
      <div class="bgc">
        <div class="left-bg"></div>
        <div class="md"></div>
        <div class="right-bg"></div>
      </div>

      <section class="news-wrapper">
        <ul>
          <li v-for="item in newsData" :key="item.id" @click="getNewsInfo(item.id)">
            <div>
              <article>
                <section class="s-left">
                  <h4>{{ item.title }}</h4>
                  <div class="s-info">
                    <span class="s-source"> {{ item.source }} </span>
                    <span class="add-time">{{ "添加时间:" + item.date }}</span>
                  </div>
                </section>
                <section class="s-right">
                  <img v-lazy="item.small_img" />
                </section>
              </article>
            </div>
          </li>
        </ul>
      </section>

      <!-- <div class="tab">
        <van-button type="default" size="large" @click="newsData.reverse()">最近/默认</van-button>
      </div> -->
    </div>

    <!-- <div class="footer">
      <h5 class="title">我为什么要写这个网站?</h5>
      <p class="des">
        今天2022年10月20日，我在网上看到一则网民热议的微博话题，
        不过后来我看到这则话题在微博被删除了。<br />
        话题讨论的大体内容是:<br />
        汝州城因疫情防控，被隔离的一个16岁小女生隔离期间高烧40度，最终因送医迟缓，被活活烧死的内容。<br />
        我看到心里很难受，很心疼，小女生不是死于医疗条件不发达，也不是死于交通条件不便利，更不是死于通讯障碍，而是死于过度防疫。<br />
        政府说疫情防控是为了民众的生命安全，结果因为疫情防控而置其他病患的生命于不顾？这到底为的是什么？！
      </p>
    </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted, onActivated } from "vue";
import { useRouter } from "vue-router";
import { getData } from "../getData";
const router = useRouter();
const scrollTopVal = ref(0);
const homeNodeRef = ref(null);
const { newsData } = getData();

const getNewsInfo = (id) => {
  window.localStorage.setItem("id", JSON.stringify(id));
  router.push({ path: `/news_info/${id}` });
};
// 滚动时，保存最新的scrollTop值
onMounted(() => {
  homeNodeRef.value.addEventListener("scroll", (e) => {
    scrollTopVal.value = e.target.scrollTop;
  });
});
// 缓冲组件激活时触发这个钩子
onActivated(() => (homeNodeRef.value.scrollTop = scrollTopVal.value));
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  //   chrome去除滚动条样式
  &::-webkit-scrollbar {
    display: none;
  }

  //   兼容火狐
  &.scw {
    scrollbar-width: none;
    overflow: -moz-scrollbars-none;
  }

  //   兼容IE10+
  &.msscw {
    -ms-overflow-style: none;
  }
  header {
    height: 54px;
    position: fixed;
    z-index: 6;

    img {
      width: 100%;
      height: 100%;
    }
    .title {
      position: absolute;
      top: 0;
      padding: 16px 22px 0 22px;
      font-size: 16px;
      color: rgb(253, 253, 253);
      font-weight: 600;
    }
    p {
      position: absolute;
      right: 22px;
      color: white;
      bottom: 0;
      font-size: 14px;
    }
  }
  .home-content {
    .clear-fix {
      width: 100%;
      height: 54px;
    }
    .bgc {
      width: 100%;
      height: 54px;
      display: flex;
      margin-top: -1px;

      .left-bg {
        width: 5%;
        height: 54px;
        background: linear-gradient(rgb(253, 55, 38), hsla(0, 0%, 100%, 0));
      }
      .md {
        flex: auto;
        height: 54px;
        background: linear-gradient(rgb(254, 100, 86), hsla(0, 0%, 100%, 0));
          //  background-color: rgb(237, 241, 243);

      }
      .right-bg {
        width: 5%;
        height: 54px;
        background: linear-gradient(rgb(255, 98, 54), hsla(0, 0%, 100%, 0));
      }
    }
    .tab {
      background-color: rgb(255, 255, 255);
      position: fixed;
      width: 375px;
      bottom: 0;
    }
    .news-wrapper {
      margin-top: -54px;
      position: relative;
      z-index: 5;
      animation-duration: 0.5s;
      animation-fill-mode: both;
      animation-name: enterAnimate;
      &.active {
        margin-top: 0;
      }

      @keyframes enterAnimate {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(0);
        }
      }
      ul {
        list-style: none;
        li {
          padding: 12px;
          margin: 10px;
          margin-top: 0;
          border-radius: 10px;
          background-color: rgb(255, 255, 255);
          &.first {
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
          }
          div {
            article {
              display: flex;
              .s-left {
                display: flex;
                flex-wrap: wrap;
                flex: 1;
                font-size: 15px;
                color: black;
                h4 {
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  flex: 100%;
                  max-height: 50px;
                  font-weight: 400;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  line-height: 25px;
                  margin-top: -4px;
                }

                .s-info {
                  display: flex;
                  width: 100%;
                  justify-content: space-between;
                  align-items: end;
                  color: #999;
                  font-size: 12px;
                  .s-source {
                    max-width: 86px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }
                }
              }
              .s-right {
                width: 109px;
                height: 83.5px;
                margin-left: 10px;
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  border-radius: 3px;
                }
              }
            }
          }
        }
      }
    }
  }

  .img-list {
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .footer {
    .title {
      color: red;
    }
    .des {
      font-size: 16px;
    }
  }
}
</style>

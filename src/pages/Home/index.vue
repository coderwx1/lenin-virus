<template>
  <div class="home" ref="homeRef">
    <div class="home-content">
      <header>
        <img src="https://i.postimg.cc/fLy21sW8/header-bg.png" />
        <h1 class="title">始终坚持一切为了人民</h1>
        <p>——习近平</p>
      </header>
      <div class="bgc">
        <div class="left-bg"></div>
        <div class="md"></div>
        <div class="right-bg"></div>
      </div>

      <!-- 这个标签用到了过渡，页面初始加载时，不管有没有数据都会应用动画过渡效果，等稍后数据来了就会直接填充到页面（会给人一种过渡没有生效的感觉，所以这里直接判断只有数据请求到了才会渲染这个标签） -->
      <section class="news-wrapper" v-if="newsData.length">
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
      <section class="fixIcon" :class="{ 'is-show': scrollVal >= 500 }">
        <!-- classObject -->
        <a href="javascript:" class="fixTop-ico" @click="scrollTo(0)"></a>
        <a href="javascript:" class="fixBottom-ico" @click="scrollTo(1)"></a>
      </section>

      <!-- <div class="test">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li>底部</li>
        </ul>
      </div> -->
      <!-- <div class="tab">
        <van-button type="default" size="large" @click="newsData.reverse()">最近/默认</van-button>
      </div> -->
    </div>
    <div class="footer">
      <div class="footer-content">
        <p>献给那些死于过度防疫的<span>人们</span></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onActivated } from "vue";
import { useRouter } from "vue-router";
import { getData } from "../getData";

const router = useRouter();
const { newsData } = getData();
const homeRef = ref(null);
const scrollVal = ref(0);

// 滚动时，保存最新的scrollTop值
onMounted(() => {
  homeRef.value.addEventListener("scroll", (e) => {
    scrollVal.value = e.target.scrollTop;
  });
});

// 缓冲组件激活时触发这个钩子
onActivated(() => (homeRef.value.scrollTop = scrollVal.value));

const scrollTo = (value) => {
  if (value == 0) {
    scrollVal.value = value;
  } else {
    const scrollBottomVal = homeRef.value.scrollHeight - homeRef.value.clientHeight;
    scrollVal.value = scrollBottomVal;
  }
  homeRef.value.scrollTo({ top: scrollVal.value, behavior: "smooth" });
};

const getNewsInfo = (id) => {
  router.push({ path: `/news_info/${id}` });
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
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

  .fixIcon {
    position: fixed;
    bottom: 130px;
    right: 13px;
    z-index: 999;
    display: none;

    &.is-show {
      display: block;
    }

    .fixTop-ico {
      display: block;
      width: 36px;
      height: 36px;
      background: url(https://x2.ifengimg.com/fe/shank/channel/top.e15cad56.png) no-repeat 0 0/36px 36px;
      margin-bottom: 6px;
    }

    .fixBottom-ico {
      .fixTop-ico();
      background: url(https://x2.ifengimg.com/fe/shank/channel/bottom.93b36099.png) no-repeat 0 0/36px 36px;
      margin-bottom: 0;
    }
  }

  header {
    width: 375px;
    height: 54px;
    position: relative;

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
      padding-bottom: 5px;
    }
  }

  .home-content {
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

                img[lazy="loading"] {
                  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
                  background-size: 400% 100%;
                  animation: loading-animate 1s ease infinite;
                }

                @keyframes loading-animate {
                  0% {
                    background-position: 100% 50%;
                  }

                  to {
                    background-position: 0 50%;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .footer {
    width: 100%;
    padding: 20px;
    background: #0e163c;
    text-align: center;
    .footer-content {
      line-height: 20px;
      p {
        font-size: 16px;
        color: #8f8f9f;
         font-family: 'ZCOOL XiaoWei', serif;
         span{
          color: #fff;
         }
      }
    }
  }
}
</style>

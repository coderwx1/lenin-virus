<template>
  <div class="home" ref="scrollRef">
    <div class="home-content">
      <div class="header">
        <h1 class="title">记录中国在新冠疫情中的社会百态，民间百象</h1>
      </div>
      <div class="bgc"></div>
      <section class="news-wrapper">
        <ul>
          <li v-for="item in data" :key="item.id" @click="getNewsInfo(item.id)">
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
                  <img :src="item.small_img" alt="" />
                </section>
              </article>
            </div>
          </li>
        </ul>
      </section>

      <div style="height: 2000px"></div>
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
import { getNews } from "@/api";
import { ref } from "vue";
// onMounted
import { useRouter, onBeforeRouteLeave } from "vue-router";

const router = useRouter();
const data = ref();
const scrollRef = ref(null);
let routeiId = 0;

onBeforeRouteLeave(() => {
  window.localStorage.setItem("id", JSON.stringify(routeiId));
});
getNews().then(
  (val) => {
    console.log(val);
    data.value = val.news;
  },
  (err) => {
    console.log(err.message);
  }
);

const getNewsInfo = (id) => {
  routeiId = id;
  router.push({ path: `/news_info/${id}` });
};

// onMounted(() => {
//   scrollRef.value.addEventListener("scroll", function (e) {
//     console.log(22);
//     // >= 58 ? (showHeaderBgc.value = true) : (showHeaderBgc.value = false);
//     console.log(e.target.scrollTop);
//     window.localStorage.setItem("scrollTop", JSON.stringify(e.target.scrollTop));
//   });
// });
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  background-color: rgb(237, 241, 243);
  .home-content {
    background-color: rgb(237, 241, 243);
    .header {
      background: #fff;
      .title {
        padding: 18px 0;
        text-align: center;
        font-size: 16px;
        color: red;
        font-weight: 600;
      }
    }
    .bgc {
      width: 100%;
      height: 60px;
      background: linear-gradient(#fff, hsla(0, 0%, 100%, 0));
    }
    .news-wrapper {
      margin-top: -60px;

      ul {
        list-style: none;
        li {
          padding: 12px;
          margin: 10px;
          margin-top: 0;
          border-radius: 10px;
          background-color: rgb(255, 255, 255);
          div {
            article {
              display: flex;
              .s-left {
                display: flex;
                flex-wrap: wrap;
                flex: 1;
                font-size: 16px;
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

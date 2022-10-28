import {
  createRouter,
  // createWebHashHistory,
  createWebHistory,
} from "vue-router";

import Home from "../pages/Home";
import NewsInfo from "../pages/NewsInfo/NewsInfo";

// const Home = () => import('../pages/Home')
// const NewsInfo = () => import('../pages/NewsInfo/NewsInfo')

const routes = [
  {
    path: "/",
    redirect: {
      name: "Home",
    },
  },

  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      transition: "home",
    },
  },

  {
    path: "/news_info/:id",
    name: "NewsInfo",
    component: NewsInfo,
    meta: {
      transition: "newsInfo",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHashHistory(),
  routes,
});

export default router;

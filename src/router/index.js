import {
  createRouter,
  // createWebHashHistory,
  createWebHistory
} from 'vue-router'
// import Home from '../pages/Home'
// import test from '../pages/test'

const Home = () => import('../pages/Home')
const NewsInfo = () => import('../pages/NewsInfo') //如果要用路由过渡 需要用这种引入方式，同时在APP组件设置overflow：hidden

const routes = [{
    path: '/',
    redirect: {
      name: 'Home'
    }
  },

  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      transition: 'home'
    },
  },

  {
    path: '/news_info/:id',
    name: 'NewsInfo',
    component: NewsInfo,
    meta: {
      transition: 'homeList'
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHashHistory(),
  routes
})


export default router
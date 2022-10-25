import {
  createRouter,
  // createWebHashHistory,
  createWebHistory
} from 'vue-router'
// import Home from '../pages/Home'
// import NewsInfo from '../pages/NewsInfo'


//如果要用路由过渡组件，需要用这种引入方式，同时在APP组件设置overflow：hidden
const Home = () => import('../pages/Home')
const NewsInfo = () => import('../pages/NewsInfo')

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
      transition: 'newsInfo'
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHashHistory(),
  routes
})


export default router
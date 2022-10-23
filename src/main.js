import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'

import 'lib-flexible/flexible'
import 'animate.css';
// import {
//     Lazyload,
// } from 'vant';

import lazyPlugin from 'vue3-lazy'
const app = createApp(App)

const loadimage = require('@/assets/loading.jpg')
const errorimage = require('@/assets/404.jpg')

app.use(lazyPlugin, {
    loading: loadimage,
    error: errorimage
})
// app.use(VueLazyload, {
//     loading: loadimage,
//     error: errorimage
// })
app.use(router)
















app.mount('#app')
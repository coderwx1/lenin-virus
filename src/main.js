import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'

import 'lib-flexible/flexible'
import 'animate.css';
import {
    Lazyload,
} from 'vant';
const app = createApp(App)

const loadimage = require('@/assets/loading.jpg')
const errorimage = require('@/assets/404.jpg')


app.use(Lazyload, {
    loading: loadimage,
    error: errorimage
})
app.use(router)
















app.mount('#app')
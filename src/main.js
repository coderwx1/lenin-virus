import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'

import 'lib-flexible/flexible'
import {
    Lazyload,
} from 'vant';
const app = createApp(App)

const loadimage = require('@/assets/loading.jpg')

app.use(Lazyload, {
    loading: loadimage
})
app.use(router)
















app.mount('#app')
import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
// import 'animate.css';
import {
    Loading
} from 'vant';
import {
    Lazyload,
} from 'vant';

const app = createApp(App)
const loadimage = require('@/pages/NewsInfo/loading.jpg')
const errorimage = require('@/assets/404.jpg')

app.use(Lazyload, {
     lazyComponent: true,
    loading: loadimage,
    error: errorimage
});
app.use(Loading);
app.use(router)
















app.mount('#app')
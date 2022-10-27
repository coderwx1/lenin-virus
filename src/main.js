import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
import 'animate.css';

import { Loading, Lazyload, List, Empty, Divider } from "vant";

const app = createApp(App)
// const loadimage = require('@/pages/NewsInfo/loading.jpg')
const errorimage = require('@/assets/404.jpg')

app.use(Lazyload, {
    lazyComponent: true,
    // loading: loadimage,
    error: errorimage
});
app.use(Loading);
// app.use(Button);
app.use(List);
app.use(Empty); 
app.use(Divider);

app.use(router)

















app.mount('#app')
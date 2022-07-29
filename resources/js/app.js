import './bootstrap';
import { Tooltip, Toast, Popover } from 'bootstrap';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'



const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.components('ValidationProvider', ValidationProvider)
app.mount('#app')

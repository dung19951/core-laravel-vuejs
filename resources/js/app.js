import './bootstrap';
import { Tooltip, Toast, Popover } from 'bootstrap';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App)
app.use(VueSweetalert2)
app.use(router)
app.use(VueAxios, axios)
app.use(ElementPlus)
app.mount('#app')
